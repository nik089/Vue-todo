// services/userService.js
import axios from 'axios';

// Reusable axios instance with default headers
const apiClient = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'x-api-key': 'reqres-free-v1', // API key
    'Content-Type': 'application/json',
  },
});

export default {
  // ✅ Get Users (paginated list)
  async getUsers(page = 1) {
    return apiClient.get(`/users`);
  },

  // ✅ Create a new user
  async createUser(data) {
    return apiClient.post('/users', data);
  },

  // ✅ Update user by ID
  async updateUser(id, data) {
    return apiClient.put(`/users/${id}`, data);
  },

  // ✅ Delete user by ID
  async deleteUser(id) {
    return apiClient.delete(`/users/${id}`);
  }
};
