import childrenRoutes from '@/router/child-routes'

const routes = [
  ...childrenRoutes,
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/components/404.vue')
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import('@/views/chart.vue')
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
