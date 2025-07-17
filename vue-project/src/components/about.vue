<template>
  <div class="about-us-page container my-5">
    <!-- Hero Section -->
    <section class="text-center mb-5">
      <transition name="fade">
        <div>
          <h1 class="display-4 fw-bold text-gradient animate__animated animate__fadeInDown">
            🌟 About Our Team
          </h1>
          <p class="lead text-muted animate__animated animate__fadeInUp animate__delay-1s">
            We craft high-quality, scalable, and beautiful web experiences using Vue and modern technologies.
          </p>
        </div>
      </transition>
    </section>

    <!-- Mission Section -->
    <section class="row align-items-center mb-5">
      <div class="col-md-6 text-center" data-aos="zoom-in">
        <img
          src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
          class="img-fluid rounded-4 shadow-lg border border-light"
          alt="Team Working"
        />
        <small class="text-muted d-block mt-2">👨‍💻 Our team in action</small>
      </div>
      <div class="col-md-6 mt-4 mt-md-0 animate__animated animate__fadeInRight">
        <h2 class="text-secondary fw-semibold">🚀 Our Mission</h2>
        <p class="text-muted">
          We empower businesses with intuitive UIs and efficient code. Our mission is to blend creativity and
          performance into every pixel and line of code.
        </p>
        <ul class="list-unstyled text-muted">
          <li>✅ Clean, maintainable code</li>
          <li>✅ Responsive & accessible design</li>
          <li>✅ Continuous innovation & learning</li>
        </ul>
      </div>
    </section>

    <!-- Team Section -->
    <section class="mb-5">
      <h2 class="text-center text-primary mb-4 animate__animated animate__fadeIn">👥 Meet the Team</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div class="col" v-for="n in 6" :key="n">
          <transition name="zoom">
            <div
              class="card team-card h-100 text-center shadow border-0 animate__animated animate__zoomIn"
              :style="{ animationDelay: `${n * 0.1}s` }"
            >
              <img
                :src="`https://i.pravatar.cc/300?img=${n}`"
                class="card-img-top rounded-top"
                alt="Team Member"
              />
              <div class="card-body">
                <h5 class="card-title fw-bold">Member {{ n }}</h5>
                <p class="card-text text-muted">Frontend Engineer</p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="bg-light rounded-4 p-4 shadow animate__animated animate__fadeInUp">
      <h3 class="text-center mb-4 text-dark">📞 Contact Information</h3>
      <div class="row text-center">
        <div class="col-md-4 mb-4" data-aos="fade-right">
          <h5 class="text-primary">📍 Address</h5>
          <p>123 Vue Lane, Code City, JS 2025</p>
        </div>
        <div class="col-md-4 mb-4" data-aos="fade-up">
          <h5 class="text-primary">📞 Phone</h5>
          <p>+91 98765 43210</p>
        </div>
        <div class="col-md-4 mb-4" data-aos="fade-left">
          <h5 class="text-primary">✉️ Email</h5>
          <p>hello@vuecompany.dev</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

onMounted(() => {
  AOS.init({ duration: 1000 });
});
</script>

<style scoped>
/* Gradient Text */
.text-gradient {
  background: linear-gradient(45deg, #0d6efd, #6610f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Team Card Hover */
.team-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.team-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

/* Vue Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.zoom-enter-active {
  animation: zoomIn 0.6s;
}
.zoom-leave-active {
  animation: zoomOut 0.6s;
}
</style>
