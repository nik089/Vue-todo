<template>
  <div class="container my-5">
    <div class="card mb-5 shadow-sm border-0">
      <div class="card-header bg-dark text-white">
        <h5 class="mb-0"><i class="bi bi-plus-circle-fill me-2"></i>
          {{ isEdit ? "Edit" : "Add" }} Product</h5>
      </div>

      <div class="card-body bg-light">
        <form @submit.prevent="handleSubmit">
          <div class="row g-4">
            <!-- Title -->
            <div class="col-md-6">
              <label class="form-label fw-bold">
                <i class="bi bi-type me-1 text-primary"></i>Title
              </label>
              <input type="text" class="form-control" :class="{ 'is-invalid': errors.title }" v-model="form.title"
                placeholder="Enter product title" @input="validateField('title')" />
              <div v-if="errors.title" class="invalid-feedback">{{ errors.title }}</div>
            </div>

            <!-- Price -->
            <div class="col-md-6">
              <label class="form-label fw-bold">
                <i class="bi bi-currency-dollar me-1 text-primary"></i>Price
              </label>
              <input type="number" class="form-control" :class="{ 'is-invalid': errors.price }" v-model="form.price"
                placeholder="Enter price" @input="validateField('price')" />
              <div v-if="errors.price" class="invalid-feedback">{{ errors.price }}</div>
            </div>

            <!-- Discount Percentage -->
            <div class="col-md-6">
              <label class="form-label fw-bold">
                <i class="bi bi-percent me-1 text-primary"></i>Discount Percentage
              </label>
              <input type="number" step="0.01" class="form-control" :class="{ 'is-invalid': errors.discountPercentage }"
                v-model="form.discountPercentage" placeholder="Enter discount %"
                @input="validateField('discountPercentage')" />
              <div v-if="errors.discountPercentage" class="invalid-feedback">{{ errors.discountPercentage }}</div>
            </div>

            <!-- Rating -->
            <div class="col-md-6">
              <label class="form-label fw-bold">
                <i class="bi bi-star-fill me-1 text-primary"></i>Rating
              </label>
              <input type="number" step="0.1" class="form-control" :class="{ 'is-invalid': errors.rating }"
                v-model="form.rating" placeholder="Enter rating" @input="validateField('rating')" />
              <div v-if="errors.rating" class="invalid-feedback">{{ errors.rating }}</div>
            </div>

            <!-- Stock -->
            <div class="col-md-6">
              <label class="form-label fw-bold">
                <i class="bi bi-box-seam me-1 text-primary"></i>Stock
              </label>
              <input type="number" class="form-control" :class="{ 'is-invalid': errors.stock }" v-model="form.stock"
                placeholder="Enter stock" @input="validateField('stock')" />
              <div v-if="errors.stock" class="invalid-feedback">{{ errors.stock }}</div>
            </div>

            <!-- Brand -->
            <div class="col-md-6">
              <label class="form-label fw-bold">
                <i class="bi bi-bag me-1 text-primary"></i>Brand
              </label>
              <input type="text" class="form-control" :class="{ 'is-invalid': errors.brand }" v-model="form.brand"
                placeholder="Enter brand" @input="validateField('brand')" />
              <div v-if="errors.brand" class="invalid-feedback">{{ errors.brand }}</div>
            </div>
          </div>

          <!-- Buttons -->
          <div class="mt-4 d-flex justify-content-between align-items-center">
            <button class="btn btn-secondary" @click.prevent="showTable">
              <i class="bi bi-arrow-left"></i> Back
            </button>
            <button class="btn btn-success px-4" type="submit">
              <i class="bi bi-check-circle me-1"></i> {{ isEdit ? "Update" : "Submit" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup>
import { reactive, ref, watch } from 'vue';
import { useToast } from 'vue-toast-notification';
import userService from '../todo-dummy-api/userService';

const isEdit = ref(false);
const toast = useToast();
// get data in another components
const emit = defineEmits(['onBack', 'onAddUser', 'onUpdateUser']);
const props = defineProps({
  user: Object,
  index: Number
});



const form = reactive({
  title: '',
  price: null,
  discountPercentage: null,
  rating: null,
  stock: null,
  brand: '',
  id: null,
});

const errors = reactive({
  title: '',
  price: '',
  discountPercentage: '',
  rating: '',
  stock: '',
  brand: ''
});


// form reset
function resetForm() {
  form.title = ''
  form.price = ''
  form.discountPercentage = ''
  form.rating = ''
  form.stock = ''
  form.brand = ''
  Object.keys(errors).forEach(key => (errors[key] = ''))
}

watch(() => props.user, (newVal) => {
  if (newVal) {
    Object.assign(form, {
      title: newVal.title,
      price: newVal.price,
      discountPercentage: newVal.discountPercentage,
      rating: newVal.rating,
      stock: newVal.stock,
      brand: newVal.brand,
      id: newVal.id
    });
    isEdit.value = true;
  } else {
    resetForm();
    isEdit.value = false;
  }
}, { immediate: true });


// Validate specific field on input/change
function validateField(field) {
  switch (field) {
    case 'title':
      errors.title = form.title.trim() ? '' : 'Title is required';
      break;
    case 'price':
      errors.price = form.price !== null && form.price !== '' ? '' : 'Price is required';
      break;
    case 'discountPercentage':
      errors.discountPercentage = form.discountPercentage !== null && form.discountPercentage !== ''
        ? ''
        : 'Discount percentage is required';
      break;
    case 'rating':
      errors.rating = form.rating !== null && form.rating !== '' ? '' : 'Rating is required';
      break;
    case 'stock':
      errors.stock = form.stock !== null && form.stock !== '' ? '' : 'Stock is required';
      break;
    case 'brand':
      errors.brand = form.brand.trim() ? '' : 'Brand is required';
      break;
  }
}


async function handleSubmit() {
  let isValid = true;
  validateField('title');
  validateField('price');
  validateField('discountPercentage');
  validateField('rating');
  validateField('stock');
  validateField('brand');

  Object.values(errors).forEach(msg => {
    if (msg) isValid = false;
  });

  if (isValid) {
    const productPayload = {
      title: form.title,
      price: form.price,
      discountPercentage: form.discountPercentage,
      rating: form.rating,
      stock: form.stock,
      brand: form.brand,
    };

    try {
      if (isEdit.value) {
        await userService.updateUser(form.id, JSON.stringify(productPayload));
        toast.success("User updated successfully!");
      } else {
        await userService.createUser(JSON.stringify(productPayload));
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
function showTable() {
  emit('onBack')

}
</script>
