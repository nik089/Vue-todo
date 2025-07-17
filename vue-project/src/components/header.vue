<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand d-flex align-items-center" href="#">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Logo" width="30" height="30"
        class="d-inline-block align-text-top me-2" />
    </a>

    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <!-- ✅ Use router-link for internal navigation -->
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <!-- ✅ Use programmatic navigation via @click -->
          <a class="nav-link" href="#" @click.prevent="goToContact" to="/contact-us">Contact-us</a>
        </li>
        <li class="nav-item">
          <!-- use router link -->
          <router-link class="nav-link" to="/about">About-us</router-link>
        </li>
           <li class="nav-item">
          <!-- use router link -->
          <router-link class="nav-link" to="/todo">Todo</router-link>
        </li>
      </ul>
      <span class="navbar-text">
        Logout
      </span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
function goToContact() {
  router.push('/contact-us'); // ✅ correct path
}
</script>

<style scoped>
.navbar{
  padding: 10px 20px;
}
</style>
