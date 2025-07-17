<template>
  <div class="container my-5" v-if="!isShow">
    <!-- Add Button -->
    <div class="d-flex justify-content-between align-items-center  mb-3">
      <h4 class="fw-bold text-primary mb-0">
        📝 Todo Management With Separate Component
      </h4>
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


  <!-- Add/Edit Form Component -->
  <addEditUser v-if="isShow" @onBack="isShow = false" @onAddUser="addNewUser" @onUpdateUser="updateUser"
    :user="selectedUser" :index="editingIndex" />
</template>



<script setup>
import { reactive, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
const toast = useToast();
const isShow = ref(false);
import addEditUser from './addEditUser.vue';
const selectedUser = ref(null);
const editingIndex = ref(null);

const users = reactive([
  { name: 'Kumar', age: 28, gender: 'Male', designation: 'Frontend Developer', location: 'Delhi' },
  { name: 'Sharma', age: 25, gender: 'Female', designation: 'UX Designer', location: 'Mumbai' },
  { name: 'Mehta', age: 30, gender: 'Male', designation: 'Backend Developer', location: 'Bangalore' }
])




//function are used move to add new user
function addUser() {
  isShow.value = true
}

//function are used to edit user
function editUser(user, index) {
  if (user) {
    isShow.value = true;
    selectedUser.value = { ...user }; // copy the user data
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

// Add new user to list
function addNewUser(newUser) {
  users.push(newUser);
}

//update User
function updateUser({ user, index }) {
  users[index] = user;
}
</script>
