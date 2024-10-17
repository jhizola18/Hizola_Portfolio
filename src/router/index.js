import { createRouter, createWebHistory } from 'vue-router';
import ContactPage from '../components/ContactPage.vue';
import CreativePage from '../components/CreativePage.vue';
import Dashboard from '../components/DashboardPage.vue';
import LoginPage from '../components/LoginPage.vue';
import PortfolioPage from '../components/PortfolioPage.vue';
import ProfilePage from '../components/ProfilePage.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage, // Set LoginPage as the first page
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: ProfilePage,
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: PortfolioPage,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: ContactPage,
      },
      {
        path: 'creative',
        name: 'Creative',
        component: CreativePage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
