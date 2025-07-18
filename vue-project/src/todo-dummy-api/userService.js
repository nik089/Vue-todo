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
  // ✅ Get products (paginated list)
  async getProducts() {
    return apiClient.get(`/products`);
  },

  // ✅ Create a new products
  async createUser(data) {
    return apiClient.post('/products/add', data);
  },

  // ✅ Update products by ID
  async updateUser(id, data) {
    return apiClient.put(`/products/${id}`, data);
  },

  // ✅ Delete products by ID
  async deleteUser(id) {
    return apiClient.delete(`/products/${id}`);
  }
};


