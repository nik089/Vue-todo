<template>
  <div class="container my-5">
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
import { reactive, ref,watch  } from 'vue';
import { useToast } from 'vue-toast-notification';
const isEdit = ref(false);
const toast = useToast();
// get data in another components
const emit = defineEmits(['onBack', 'onAddUser','onUpdateUser']);
const props = defineProps({
  user: Object,
  index: Number
});

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


// form reset
function resetForm() {
  form.name = ''
  form.age = ''
  form.gender = ''
  form.designation = ''
  form.location = ''
  Object.keys(errors).forEach(key => (errors[key] = ''))
}

watch(
  () => props.user,
  (newUser) => {
    if (newUser) {
      Object.assign(form, newUser);
      isEdit.value = true;
    } else {
      resetForm();
      isEdit.value = false;
    }
  },
  { immediate: true }
)


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

function handleSubmit() {
  let isValid = true;
  validateField('name');
  validateField('age');
  validateField('gender');
  validateField('designation');
  validateField('location');

  Object.values(errors).forEach(msg => {
    if (msg) isValid = false;
  });

  if (isValid) {
    if (isEdit.value) {
      emit('onUpdateUser', { user: { ...form }, index: props.index });
    } else {
      emit('onAddUser', { ...form });
    }
    toast.success(isEdit.value ? "User updated successfully!" : "User added successfully!");
    resetForm();
    isEdit.value = false;
    emit('onBack');
  } else {
    toast.error('Please fix validation errors.');
  }
}





//back to user list
function showTable(){
  emit('onBack')

}
</script>
