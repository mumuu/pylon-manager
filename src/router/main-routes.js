export default [
  {
    name: 'dapps',
    path: '/dapps',
    meta: { requiresAuth: false },
    component: () => import(/* webpackChunkName: 'common' */ '../views/main/Dapps.vue'),
  },
];
