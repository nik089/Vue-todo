import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import Contact from '../view/contact.vue';
import About from '../view/about.vue';
import Todo from '../todo-app/todo.vue';



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
