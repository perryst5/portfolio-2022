import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import FontAwesomeIcon from "./utilities/fontawesome-icons";

const portfolio = createApp(App)
portfolio.use(router);
portfolio.component("font-awesome-icon", FontAwesomeIcon)
portfolio.mount('#app')
