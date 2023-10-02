import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home', // Corrected name as a string
    component: Home
  },
  {
    path: '/login',
    name: 'Login', // Corrected name as a string
    component: () => import('../components/Login.vue')
  },
  {
    path: '/register',
    name: 'Register', // Corrected name as a string
    component: () => import('../components/Register.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
