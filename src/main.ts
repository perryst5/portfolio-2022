import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

const portfolio = createApp(App)
portfolio.use(router);
portfolio.mount('#app')
