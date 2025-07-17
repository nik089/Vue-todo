import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Contact from '../components/contact.vue';
import About from '../components/about.vue';
import Todo from '../components/todo.vue';



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
   {
    path: '/contact-us',
    name: 'contact-us',
    component: Contact
  },
   {
    path: '/about',
    name: 'about',
    component: About
  },
     {
    path: '/todo',
    name: 'todo',
    component: Todo
  },
  // Add more routes here if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
