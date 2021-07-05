import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from "@/store";
import VueFeather from 'vue-feather';

let app = createApp(App)
app.use(router)
app.use(store)
app.component(VueFeather.name, VueFeather);
app.mount('#app')

import 'bootstrap/dist/css/bootstrap.css'
