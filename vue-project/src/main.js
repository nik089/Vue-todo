import './styles.css';
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueECharts from 'vue-echarts'
import 'echarts'
import ToastPlugin from 'vue-toast-notification';

const app = createApp(App);
app.use(router);
app.use(ToastPlugin, {
  position: 'top-right',
  duration: 3000
});
app.component('VChart', VueECharts);
app.mount('#app');
