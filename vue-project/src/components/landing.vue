<template>
  <div class="landing-page text-center">
    <!-- Hero Banner (no padding, full-width image) -->
    <section class="hero-section text-dark m-0">
      <h1 class="fw-bold">Welcome to InsightX</h1>
      <p class="lead">Transform data into decisions with our powerful analytics platform.</p>
      <img src="https://picsum.photos/seed/hero/1920/600" class="w-100 img-fluid hero-image" alt="Hero Image" />
    </section>

    <!-- Dummy Content -->
    <section class="py-5 bg-white">
      <div class="container text-start">
        <h2 class="mb-3">📚 Learn More</h2>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vitae tincidunt sem. Morbi nec
          libero
          ut orci cursus euismod. Aenean nec semper lorem. Nam vel nulla eget sapien euismod sagittis. Sed lobortis
          lacus
          sed sapien convallis, vitae vehicula erat viverra. Suspendisse potenti. Praesent blandit pulvinar ipsum, in
          tincidunt nulla placerat sed. Etiam tempor velit et augue scelerisque, non vulputate justo aliquam. Cras
          tristique, lorem a feugiat sagittis, sapien ex tristique ante, nec sollicitudin justo eros at nunc. Integer
          scelerisque sem a diam congue, nec fringilla velit tincidunt. Fusce finibus nibh id nunc finibus, id ultrices
          nulla ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </div>
    </section>

    <!-- Features -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-md-6">
            <img src="https://picsum.photos/seed/dashboard/600/400" class="img-fluid rounded shadow" />
          </div>
          <div class="col-md-6 text-start">
            <h2>📊 Real-Time Insights</h2>
            <p class="text-muted">In today's fast-paced digital world, data is constantly being generated — and
              businesses that can capture, interpret, and act on that data in real-time gain a significant competitive
              advantage. At InsightX, we empower teams with real-time insights that unlock the full potential of your
              operational data.

              With our real-time dashboards, you no longer have to wait for end-of-day reports or manually refresh
              spreadsheets. Whether you're tracking sales performance, user behavior, system health, or supply chain
              metrics, our platform provides instant updates as data flows in. This means your team can make timely
              decisions, identify anomalies, and respond to opportunities the moment they arise.

              Our visualizations are not only fast, but also beautifully designed and interactive. With dynamic charts,
              drill-down capabilities, and contextual filtering, you can explore your data from every angle — all with
              just a few clicks. No technical expertise required.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Section -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center g-5 flex-md-row-reverse">
          <div class="col-md-6">
            <img src="https://picsum.photos/seed/ai/600/400" class="img-fluid rounded shadow" />
          </div>
          <div class="col-md-6 text-start">
            <h2>🤖 AI-Driven Decisions</h2>
            <p class="text-muted">Our platform goes beyond traditional dashboards by using AI to identify hidden
              patterns, detect anomalies, and forecast trends that are often missed by human analysis. This allows your
              business to move from reactive decision-making to proactive strategy, with the confidence that every
              choice is backed by intelligent data modeling.

              With built-in machine learning algorithms, InsightX automatically adapts to your data over time. It learns
              what normal behavior looks like across your systems, teams, or customers — and flags unusual activity in
              real-time. Whether it’s a sudden spike in user churn, a drop in sales, or performance issues in your app,
              our AI will notify you before small issues become costly problems.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Collaboration -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-md-6">
            <img src="https://picsum.photos/seed/teamwork/600/400" class="img-fluid rounded shadow" />
          </div>
          <div class="col-md-6 text-start">
            <h2>👥 Team Collaboration</h2>
            <p class="text-muted">Work together effortlessly with shared dashboards and real-time annotations.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Security -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center g-5 flex-md-row-reverse">
          <div class="col-md-6">
            <img src="https://picsum.photos/seed/security/600/400" class="img-fluid rounded shadow" />
          </div>
          <div class="col-md-6 text-start">
            <h2>🔐 Enterprise-Grade Security</h2>
            <p class="text-muted">Your data is protected with end-to-end encryption and multi-factor authentication.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-md-6">
            <img src="https://picsum.photos/seed/team/600/400" class="img-fluid rounded shadow" />
          </div>
          <div class="col-md-6 text-start">
            <h2>🌟 Trusted by Thousands</h2>
            <p class="text-muted">“InsightX saved us 10+ hours weekly and boosted our decision-making speed!” — Jane
              Doe, PM</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-5 bg-primary text-white text-center">
      <div class="container">
        <h2 class="mb-4">Start Your Data Journey Today!</h2>
        <p class="lead mb-4">Sign up and experience powerful analytics like never before.</p>
        <button class="btn btn-light btn-lg fw-bold" @click="Login">🚀 Move to Dashboard</button>
      </div>
    </section>

    <!-- Floating Button -->
    <button class="fixed-dashboard-btn" @click="Login">
      Login
    </button>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
import { useToast } from 'vue-toast-notification';
const toast = useToast();


function Login() {
  localStorage.setItem('isLogin', 'true')  // store as string
  router.push('/home')
  toast.success('Login successfully!')
  // navigate to home
}
</script>

<style scoped>
.landing-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Hero with full width and no padding */
.hero-section {
  background: linear-gradient(to right, #007cf0, #00dfd8);
}

.hero-image {
  display: block;
  width: 100%;
  height: auto;
}

/* Fixed CTA button */
.fixed-dashboard-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  background-color: rgb(66, 211, 146);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}

.fixed-dashboard-btn:hover {
  transform: scale(1.05);
  background-color: #0b5ed7;
}
</style>
