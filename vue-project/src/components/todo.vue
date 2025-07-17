<template>
  <div class="container my-5" v-if="!isShow">
    <!-- Add Button -->
    <div class="d-flex justify-content-end mb-3">
      <button class="btn btn-m btn-success rounded-1 px-4" @click="addUser">
        <i class="bi bi-person-plus-fill me-1"></i> Add User
      </button>
    </div>

    <!-- Table -->
    <div class="table-responsive">
      <table class="table table-bordered table-striped align-middle">
        <thead class="table-dark text-center">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Designation</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.designation }}</td>
            <td>{{ user.location }}</td>
            <td class="text-center">
              <button class="btn btn-sm btn-warning me-1" @click="editUser(user, index)">Edit</button>
              <button class="btn btn-sm btn-danger" @click="deleteUser(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>


  <div class="container my-5" v-if="isShow">
    <div class="card mb-5 shadow-sm border-0">
      <div class="card-header bg-dark text-white">
        <h5 class="mb-0"><i class="bi bi-person-plus-fill me-2"></i>
          {{ isEdit ? "Edit" : "Add" }} New User</h5>
      </div>

      <div class="card-body bg-light">
        <form @submit.prevent="handleSubmit">
          <div class="row g-4">
            <!-- Name -->
            <div class="col-md-6">
              <label class="form-label fw-bold">
                <i class="bi bi-person me-1 text-primary"></i>Name
              </label>
              <input type="text" class="form-control rounded-1 border-1" :class="{ 'is-invalid': errors.name }"
                v-model="form.name" placeholder="Enter full name" @input="validateField('name')" />
              <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
            </div>

            <!-- Age -->
            <div class="col-md-3">
              <label class="form-label fw-bold">
                <i class="bi bi-calendar-week me-1 text-primary"></i>Age
              </label>
              <input type="number" class="form-control rounded-1 border-1" :class="{ 'is-invalid': errors.age }"
                v-model="form.age" placeholder="Age" @input="validateField('age')" />
              <div v-if="errors.age" class="invalid-feedback">{{ errors.age }}</div>
            </div>

            <!-- Gender -->
            <div class="col-md-3">
              <label class="form-label fw-bold">
                <i class="bi bi-gender-ambiguous me-1 text-primary"></i>Gender
              </label>
              <select class="form-select rounded-1 border-1" :class="{ 'is-invalid': errors.gender }"
                v-model="form.gender" @change="validateField('gender')">
                <option disabled value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <div v-if="errors.gender" class="invalid-feedback">{{ errors.gender }}</div>
            </div>

            <!-- Designation -->
            <div class="col-md-6">
              <label class="form-label fw-bold">
                <i class="bi bi-laptop me-1 text-primary"></i>Designation
              </label>
              <select class="form-select rounded-1 border-1" :class="{ 'is-invalid': errors.designation }"
                v-model="form.designation" @change="validateField('designation')">
                <option disabled value="">Select Designation</option>
                <option v-for="(title, index) in designations" :key="index" :value="title.label">
                  {{ title.label }}
                </option>
              </select>
              <div v-if="errors.designation" class="invalid-feedback">{{ errors.designation }}</div>
            </div>

            <!-- Location -->
            <div class="col-md-6">
              <label class="form-label fw-bold">
                <i class="bi bi-geo-alt-fill me-1 text-primary"></i>Location
              </label>
              <input type="text" class="form-control rounded-1 border-1" :class="{ 'is-invalid': errors.location }"
                v-model="form.location" placeholder="City or Location" @input="validateField('location')" />
              <div v-if="errors.location" class="invalid-feedback">{{ errors.location }}</div>
            </div>
          </div>

          <!-- Buttons -->
          <div class="mt-4 d-flex justify-content-between align-items-center">
            <button class="btn btn-secondary rounded-1" @click.prevent="showTable">
              <i class="bi bi-arrow-left"></i> Back
            </button>
            <button class="btn btn-success rounded-1 px-4" type="submit">
              <i class="bi bi-check-circle me-1"></i> {{ isEdit ? "Update" : "Submit" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<script setup>
import { reactive, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
const isShow = ref(false);
const isEdit = ref(false);
const toast = useToast()

const users = reactive([
  { name: 'Rahul Kumar', age: 28, gender: 'Male', designation: 'Frontend Developer', location: 'Delhi' },
  { name: 'Priya Sharma', age: 25, gender: 'Female', designation: 'UX Designer', location: 'Mumbai' },
  { name: 'Arjun Mehta', age: 30, gender: 'Male', designation: 'Backend Developer', location: 'Bangalore' }
])

const designations = reactive([
  { id: 'SOFT1001', label: 'Software Developer' },
  { id: 'FRON1002', label: 'Frontend Developer' },
  { id: 'BACK1003', label: 'Backend Developer' },
  { id: 'SUPP1004', label: 'Support Developer' },
  { id: 'BLOC1005', label: 'Blockchain Developer' },
  { id: 'UIDE1006', label: 'UI Developer' },
  { id: 'UXDE1007', label: 'UX Developer' },
  { id: 'TEST1008', label: 'Tester' }
])

// Form data
const form = reactive({
  name: '',
  age: '',
  gender: '',
  designation: '',
  location: ''
})

// Error messages
const errors = reactive({
  name: '',
  age: '',
  gender: '',
  designation: '',
  location: ''
})

//function are used move to add new user
function addUser() {
  isShow.value = true;
  resetForm();
}

//function are used to edit user
const editingIndex = ref(null)
function editUser(selectedUser, index) {
  if (selectedUser) {
    isShow.value = true;
    isEdit.value = true;
    form.name = selectedUser.name
    form.age = selectedUser.age
    form.gender = selectedUser.gender
    form.designation = selectedUser.designation
    form.location = selectedUser.location

    editingIndex.value = index;
  }
  alert('Edit user at index: ' + index);
}

// delete user data
function deleteUser(index) {
  if (confirm('Are you sure to delete this user?')) {
    users.splice(index, 1);
    toast.success('Deleted successfully!')
  }
}

//show and hide table
function showTable() {
  isShow.value = false;
}

// form reset
function resetForm() {
  form.name = ''
  form.age = ''
  form.gender = ''
  form.designation = ''
  form.location = ''
  Object.keys(errors).forEach(key => (errors[key] = ''))
}

// Validate specific field on input/change
function validateField(field) {
  switch (field) {
    case 'name':
      errors.name = form.name.trim() ? '' : 'Name is required'
      break
    case 'age':
      errors.age = form.age > 0 ? '' : 'Valid age is required'
      break
    case 'gender':
      errors.gender = form.gender ? '' : 'Gender is required'
      break
    case 'designation':
      errors.designation = form.designation ? '' : 'Designation is required'
      break
    case 'location':
      errors.location = form.location.trim() ? '' : 'Location is required'
      break
  }
}

// On Submit - validate all fields
function handleSubmit() {
  let isValid = true
  validateField('name')
  validateField('age')
  validateField('gender')
  validateField('designation')
  validateField('location')

  Object.values(errors).forEach(msg => {
    if (msg) isValid = false
  })
  if (isValid) {
    if (isEdit.value) {
      // update existing user
      users[editingIndex.value] = { ...form };
      toast.success('User Updated successfully!')

    } else {
      // add new user
      users.push({ ...form });
      toast.success('New User Added successfully!')

    } resetForm();
    isShow.value = false;
  } else {
    toast.error('Please fill all required fields!')
  }
}

</script>
