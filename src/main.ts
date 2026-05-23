import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap 5 Imports
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Font Awesome support.
import '@fortawesome/fontawesome-free/css/all.min.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
