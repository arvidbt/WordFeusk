import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueMobileDetection from "vue-mobile-detection";


createApp(App).use(VueMobileDetection).mount('#app')
