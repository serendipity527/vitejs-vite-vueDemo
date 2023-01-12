import { createRouter, createWebHashHistory } from 'vue-router';
import Demo from '../components/Demo.vue';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: '/', Demo }],
});
export default router;
