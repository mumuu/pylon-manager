import mainRoutes from './main-routes';
import login from '../views/login.vue';
import layout from '../views/layout.vue';
import error from '../views/error.vue';

export default [
  // ## login page
  {
    name: 'login',
    path: '/login',
    meta: { requiresAuth: false },
    component: login,
  },
  // ## main page
  {
    path: '/',
    meta: { requiresAuth: true },
    component: layout,
    children: mainRoutes,
  },
  // ## not found page
  {
    name: 'not-found',
    path: '*',
    meta: { requiresAuth: false },
    component: error,
  },
];
