import childrenRoutes from '@/router/child-routes'

const routes = [
  ...childrenRoutes,
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/components/404.vue')
  },
  {
    path: '/esg',
    name: 'esg',
    component: () => import('@/views/esg.vue')
  },
  {
    path: '/',
    name: 'overview',
    component: () => import('@/views/overview.vue')
  },
  {
    path: '/model',
    name: 'model',
    component: () => import('@/views/model.vue')
  }
]

export default routes
