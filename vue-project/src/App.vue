<template>
  <div class="layout-wrapper">
    <!-- Show Header only if not on Landing -->
    <Header v-if="!isLanding" />

    <main class="page-content">
      <router-view /> <!-- Home, Dashboard, etc. -->
    </main>

    <!-- Show Footer only if not on Landing -->
    <Footer v-if="!isLanding" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Header from '../src/components/header.vue'
import Footer from '../src/components/footer.vue'

// Get current route
const route = useRoute()

// Check if current route is landing page
const isLanding = computed(() => route.path === '/')
</script>

<style>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-content {
  flex: 1;
  /* padding: 20px; */
}
</style>
