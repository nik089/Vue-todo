<template>
  <div class="landing-page text-center">
    <!-- Hero Banner -->
    <section class="hero-section text-dark m-0">
      <h1 class="fw-bold" data-aos="fade-down">Welcome to InsightX</h1>
      <p class="lead" data-aos="fade-up">Transform data into decisions with our powerful analytics platform.</p>
      <img src="https://picsum.photos/seed/hero/1920/600" class="w-100 img-fluid hero-image" alt="Hero Image" data-aos="zoom-in" />
    </section>

    <!-- Dummy Content -->
    <section class="py-5 bg-white">
      <div class="container text-start">
        <h2 class="mb-3" data-aos="fade-right">📚 Learn More</h2>
        <p class="text-muted" data-aos="fade-left">
          Lorem ipsum dolor sit amet... (content trimmed for brevity)
        </p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-md-6" data-aos="fade-right">
            <img src="https://picsum.photos/seed/dashboard/600/400" class="img-fluid rounded shadow" />
          </div>
          <div class="col-md-6 text-start" data-aos="fade-left">
            <h2>📊 Real-Time Insights</h2>
            <p class="text-muted">...your team can make timely decisions...</p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Section -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center g-5 flex-md-row-reverse">
          <div class="col-md-6" data-aos="zoom-in-left">
            <img src="https://picsum.photos/seed/ai/600/400" class="img-fluid rounded shadow" />
          </div>
          <div class="col-md-6 text-start" data-aos="fade-right">
            <h2>🤖 AI-Driven Decisions</h2>
            <p class="text-muted">...move from reactive to proactive strategy...</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Collaboration -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-md-6" data-aos="fade-right">
            <img src="https://picsum.photos/seed/teamwork/600/400" class="img-fluid rounded shadow" />
          </div>
          <div class="col-md-6 text-start" data-aos="fade-left">
            <h2>👥 Team Collaboration</h2>
            <p class="text-muted">Work together effortlessly...</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Security -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center g-5 flex-md-row-reverse">
          <div class="col-md-6" data-aos="zoom-in">
            <img src="https://picsum.photos/seed/security/600/400" class="img-fluid rounded shadow" />
          </div>
          <div class="col-md-6 text-start" data-aos="fade-up">
            <h2>🔐 Enterprise-Grade Security</h2>
            <p class="text-muted">Your data is protected with end-to-end encryption...</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-md-6" data-aos="flip-left">
            <img src="https://picsum.photos/seed/team/600/400" class="img-fluid rounded shadow" />
          </div>
          <div class="col-md-6 text-start" data-aos="flip-right">
            <h2>🌟 Trusted by Thousands</h2>
            <p class="text-muted">“InsightX saved us 10+ hours weekly...”</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-5 bg-primary text-white text-center">
      <div class="container" data-aos="zoom-in-up">
        <h2 class="mb-4">Start Your Data Journey Today!</h2>
        <p class="lead mb-4">Sign up and experience powerful analytics like never before.</p>
        <button class="btn btn-light btn-lg fw-bold" @click="Login">🚀 Move to Dashboard</button>
      </div>
    </section>

    <!-- Floating Button -->
 <button
  class="fixed-dashboard-btn d-flex align-items-center justify-content-center gap-2"
  @click="Login"
  data-aos="fade-left"
>
  <i class="bi bi-box-arrow-in-right"></i> <!-- Bootstrap Icon -->
  Login
</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification'
import AOS from 'aos'
import 'aos/dist/aos.css'

const router = useRouter()
const toast = useToast()

function Login() {
  localStorage.setItem('isLogin', 'true')
  router.push('/home')
  toast.success('Login successfully!')
}

onMounted(() => {
  AOS.init({ duration: 1000, once: true })
})
</script>

<style scoped>
.landing-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #10b981;
}

.hero-section {
  background: linear-gradient(to right, #10b981, #00dfd8);
  padding: 60px 0;
}

.hero-image {
  display: block;
  width: 100%;
  height: auto;
}

.fixed-dashboard-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  background-color: red;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.fixed-dashboard-btn i {
  font-size: 20px;
  transition: transform 0.3s ease;
}

.fixed-dashboard-btn:hover {
  transform: translateY(-3px) scale(1.05);
  background-color: #10b981;
}

.fixed-dashboard-btn:hover i {
  transform: translateX(3px);
}
</style>
