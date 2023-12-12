import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

const history =
  import.meta.env.MODE === 'hash' ? createWebHashHistory() : createWebHistory();


export default createRouter({
  history,
  routes
})
