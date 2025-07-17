import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import Contact from '../view/contact.vue';
import About from '../view/about.vue';
import Todo from '../todo-app/todo.vue';
import Userlist from '../todo-separate-comp/userlist.vue'
import Landing from '../components/landing.vue';
import { setupAuthGuard } from './authGuard'; // 👈 import guard setup




const routes = [
  { path: '/',
    name: 'Landing',
    component: Landing
  },

  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: Contact,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { requiresAuth: true }
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo,
    meta: { requiresAuth: true }
  },
   {
    path: '/todo-list-with-separate',
    name: 'user-list',
    component: Userlist,
    meta: { requiresAuth: true }
  },
  // Add more routes here if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 🔐 Register global guard
setupAuthGuard(router);

export default router;
