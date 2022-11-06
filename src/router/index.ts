import { createRouter, createWebHashHistory } from 'vue-router'
import getLayouts from './autoload'
import { routes } from './routers'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...routes, ...getLayouts()
  ]
})
const a = [...routes, ...getLayouts()]

export function setupRouter(app: any) {
  app.use(router)
}
