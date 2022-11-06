// 布局路由 -循环转换成Routes对象格式>  -查找子路由>  -循环子路由添加到children属性中.  返回给router-index.ts ->挂载
// {
//   path:,
//   name:,
//   component:
// }
import { RouteRecordRaw } from "vue-router";

const layout = import.meta.globEager('../Layouts/*.vue');
const views = import.meta.globEager('../views/**/*.vue');
//获取布局路由
function getLayouts() {
  const Layoutroutes = [] as RouteRecordRaw[];
  Object.entries(layout).map(([file, module]) => {
    const objectRoutes = splitGlob(file, module);
    objectRoutes.children = getViews(objectRoutes);
    Layoutroutes.push(objectRoutes)
  });
  return Layoutroutes
}

// 获取布局路由下的子路由
function getViews(objectRoutes: any) {
  const childrenRoutes = [] as RouteRecordRaw[]
  Object.entries(views).map(([file, module]) => {
    if (file.includes(`../views/${objectRoutes.name as String}`)) {
      childrenRoutes.push(splitGlob(file, module))
    }
  })
  return childrenRoutes
}

// 转换拆分操作
function splitGlob(file: String, module: any) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
  const route = {
    path: `/${name}`,
    name: name,
    component: module.default
  } as RouteRecordRaw
  //页面自定义了Route则合并自定义的,Object.assign覆盖掉
  return Object.assign(route, module.default?.route)
}
export default getLayouts