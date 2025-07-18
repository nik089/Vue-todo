// services/userService.js
import axios from 'axios';

// Reusable axios instance with default headers
const apiClient = axios.create({
  baseURL: 'https://dummyjson.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  // ✅ Get Users (paginated list)
  async getProducts() {
    return apiClient.get(`/products`);
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
