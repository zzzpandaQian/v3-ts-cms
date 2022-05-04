import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
// import store from './store'
import initImport from '@/common/import'
import 'normalize.css'
import { createPinia } from 'pinia'

const app = createApp(App)
initImport(app)
app.use(router).use(createPinia()).mount('#app')
