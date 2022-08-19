import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/formulario.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App).use(router);

import "bootstrap/dist/js/bootstrap.js"

app.mount("#app");