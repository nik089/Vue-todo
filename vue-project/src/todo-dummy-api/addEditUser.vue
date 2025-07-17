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
                <i class="bi bi-person me-1 text-primary"></i>First Name
              </label>
              <input type="text" class="form-control rounded-1 border-1" :class="{ 'is-invalid': errors.firstname }"
                v-model="form.firstname" placeholder="Enter full First Name" @input="validateField('firstname')" />
              <div v-if="errors.firstname" class="invalid-feedback">{{ errors.firstname }}</div>
            </div>

         <div class="col-md-6">
              <label class="form-label fw-bold">
                <i class="bi bi-person me-1 text-primary"></i>Last Name
              </label>
              <input type="text" class="form-control rounded-1 border-1" :class="{ 'is-invalid': errors.lastname }"
                v-model="form.lastname" placeholder="Enter full Last Name" @input="validateField('lastname')" />
              <div v-if="errors.lastname" class="invalid-feedback">{{ errors.lastname }}</div>
            </div>

             <div class="col-md-6">
              <label class="form-label fw-bold">
                <i class="bi bi-person me-1 text-primary"></i>Email
              </label>
              <input type="email" class="form-control rounded-1 border-1" :class="{ 'is-invalid': errors.email }"
                v-model="form.email" placeholder="Enter email" @input="validateField('email')" />
              <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
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
import userService from '../todo-dummy-api/userService';

const isEdit = ref(false);
const toast = useToast();
// get data in another components
const emit = defineEmits(['onBack', 'onAddUser','onUpdateUser']);
const props = defineProps({
  user: Object,
  index: Number
});



// Form data
const form = reactive({
  firstname: '',
  lastname: '',
  email: '',
  id: null,
});

// Error messages
const errors = reactive({
  firstname: '',
  lastname: '',
  email: '',
})


// form reset
function resetForm() {
  form.firstname = ''
  form.lastname = ''
  form.email = ''
  Object.keys(errors).forEach(key => (errors[key] = ''))
}

watch(() => props.user, (newVal) => {
  if (newVal) {
    form.firstname = newVal.first_name;
    form.lastname = newVal.last_name;
    form.email = newVal.email;
    form.id = newVal.id;
    isEdit.value = true;
  } else {
    resetForm();
    isEdit.value = false;
  }
}, { immediate: true });


// Validate specific field on input/change
function validateField(field) {
  switch (field) {
    case 'firstname':
      errors.firstname = form.firstname.trim() ? '' : 'First name is required';
      break;
    case 'lastname':
      errors.lastname = form.lastname.trim() ? '' : 'Last name is required';
      break;
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      errors.email = emailRegex.test(form.email) ? '' : 'Valid email is required';
      break;
  }
}

async function handleSubmit() {
  let isValid = true;
  validateField('firstname');
  validateField('lastname');
  validateField('email');

  Object.values(errors).forEach(msg => {
    if (msg) isValid = false;
  });

if (isValid) {
  const userPayload = {
    first_name: form.firstname,
    last_name: form.lastname,
    email: form.email,
    avatar: 'https://i.pravatar.cc/150?img=12' // Static dummy avatar
  };

  try {
    if (isEdit.value) {
      await userService.updateUser(form.id, userPayload);
      toast.success("User updated successfully!");
    } else {
      await userService.createUser(userPayload);
      toast.success("User added successfully!");
    }

    resetForm();
    isEdit.value = false;
    emit('onBack'); // Keep this if you want to go back to the list
  } catch (error) {
    console.error('API Error:', error);
    toast.error("Something went wrong. Please try again.");
  }
} else {
  toast.error('Please fix validation errors.');
}
}





//back to user list
function showTable(){
  emit('onBack')

}
</script>
