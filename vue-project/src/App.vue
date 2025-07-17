<template>
  <div class="layout-wrapper">
    <Header />
    <main class="page-content">
      <router-view /> <!-- This is where Home, Dashboard, etc. load -->
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../src/components/header.vue';
import Footer from '../src/components/footer.vue';
</script>

<style>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-content {
  flex: 1;
  padding: 20px;
}
</style>
