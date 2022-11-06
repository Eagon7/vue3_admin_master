import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Directive from '@/directive'

async function bootstrap() {
  const app = createApp(App);
  app.use(ElementPlus);
  Directive(app)
  await setupRouter(app) //当路由都处理好以后在挂载页面
  app.mount('#app')
}

bootstrap()