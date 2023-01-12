import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import element from 'element-plus';

createApp(App).use(router).use(store).use(element).mount('#app');
