import { createApp } from 'vue'

import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import GlobalComponents from '@/components'

import '@/styles/variables.scss'

const app = createApp(App)
app.use(router).use(GlobalComponents).use(ElementPlus).mount('#app')

export default app
