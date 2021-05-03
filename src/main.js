import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/state";
import router from "./router/router.js"
import db from './db/firebase'
const app = createApp(App)
app.use(store)
app.use(router)
app.use(db)
app.mount('#app')
