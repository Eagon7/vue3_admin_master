import { RouteRecord, RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  // {
  //   path:'/admin',
  //   name:'admin',
  //   component:() => import("../Layouts/admin.vue")
  // },
]

