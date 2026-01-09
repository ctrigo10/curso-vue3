import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ComponenteGlobal from './components/ComponenteGlobal.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

/* createApp(App)
.component('ComponenteGlobal', ComponenteGlobal)
.use(router)
.mount('#app') */

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.component('ComponenteGlobal', ComponenteGlobal)
app.use(router)
app.use(pinia)
app.mount('#app')