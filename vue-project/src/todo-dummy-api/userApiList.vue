<template>
  <div class="container my-5" v-if="!isShow">
    <!-- Add Button -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h4 class="fw-bold text-primary mb-0">
        📝 Todo Management With dummy api
      </h4>
      <button class="btn btn-success rounded-1 px-4" @click="addUser">
        <i class="bi bi-person-plus-fill me-1"></i> Add User
      </button>
    </div>

    <!-- Loader -->
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="mt-2 fw-semibold">Loading users...</p>
    </div>

    <!-- Table or No Data -->
    <div v-else>
      <div v-if="users.length > 0" class="table-responsive">
        <table class="table table-bordered table-striped align-middle text-center">
          <thead class="table-danger">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Discount Percentage</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.title }}</td>
              <td>(₹) {{ user.price }}</td>
              <td>(₹) {{ user.discountPercentage }}</td>
              <td>{{ user.rating }}/5</td>
              <td>{{ user.stock }}</td>
              <td>{{ user.brand || 'NA' }}</td>

              <td class="text-center">
                <!-- Edit Icon Button -->
                <button class="btn btn-sm btn-warning me-1" @click="editUser(user, index)">
                  <i class="bi bi-pencil-square"></i>
                </button>

                <!-- Delete Icon Button -->
                <button class="btn btn-sm btn-danger" @click="userDelete(user.id)">
                  <i class="bi bi-trash"></i>
                </button>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
      <!-- No Data Message -->
      <div v-else class="text-center my-5">
        <h5 class="text-muted">No users found.</h5>
      </div>
    </div>
  </div>
  <!-- Add/Edit Form Component -->
  <addEditUser v-if="isShow" :user="selectedUser" :index="editingIndex" @onBack="isShow = false" />
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toast-notification';
import userService from '../todo-dummy-api/userService';
import addEditUser from './addEditUser.vue';

const toast = useToast();
const isShow = ref(false);
const selectedUser = ref(null);
const editingIndex = ref(null);
const users = ref([]);
const loading = ref(true); // Loader state

// Load users on mount
onMounted(fetchUsers);

async function fetchUsers() {
  loading.value = true;
  try {
    const res = await userService.getProducts();
    users.value = res.data.products || [];
    console.log(users.value, " users.value")
  } catch (err) {
    console.error('Error loading users', err);
    toast.error('Failed to load users.');
  } finally {
    loading.value = false;
  }
}

// Delete user
async function userDelete(userId) {
  const confirmed = confirm('Are you sure you want to delete this user?');
  if (!confirmed) return;

  try {
    const res = await userService.deleteUser(userId);
    console.log(res, "res");
    // ✅ Check if deleted successfully by `isDeleted` in response data
    const isDeleted = res?.data?.isDeleted;
    if (isDeleted) {
      toast.success('User deleted successfully!');
      await fetchUsers(); // Refresh list
    } else {
      toast.error('Failed to delete user.');
    }
  } catch (error) {
    console.error('Delete error:', error);
    toast.error('Error deleting user. Try again later.');
  }
}


// Show add form
function addUser() {
  selectedUser.value = null;
  editingIndex.value = null;
  isShow.value = true;
}

// Show edit form
function editUser(user, index) {
  selectedUser.value = { ...user };
  editingIndex.value = index;
  isShow.value = true;
}
</script>
