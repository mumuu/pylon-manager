import dapps from '../views/main/Dapps.vue';

export default [
  {
    name: 'dapps',
    path: '/dapps',
    meta: { requiresAuth: false },
    component: dapps,
  },
];
