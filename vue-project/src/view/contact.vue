<template>
  <div class="container mt-5">
    <div class="card shadow-lg border-0">
      <div class="card-body">
        <h2 class="text-center text-primary mb-4">📬 Contact Us</h2>

        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="name" class="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                class="form-control"
                v-model="form.name"
                placeholder="John Doe"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                id="email"
                class="form-control"
                v-model="form.email"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div class="mb-3">
            <label for="subject" class="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              class="form-control"
              v-model="form.subject"
              placeholder="What's your message about?"
            />
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Your Message</label>
            <textarea
              id="message"
              class="form-control"
              v-model="form.message"
              rows="5"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <div class="text-center">
            <button class="btn btn-primary px-5" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

function submitForm() {
  // You can replace this with actual API call
  alert(`Thank you, ${form.name}! Your message has been sent.`);
  // Reset form
  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
}
</script>

<style scoped>
.card {
  max-width: 700px;
  margin: auto;
}
</style>
