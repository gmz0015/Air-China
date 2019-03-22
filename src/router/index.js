import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    meta: { title: 'Dashboard' },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Home', icon: 'home'}
      }
    ]
  },

  {
    path: '/programme',
    component: Layout,
    redirect: '/programme/overview',
    name: 'Programme',
    meta: { title: 'Programme', icon: 'programme' },
    children: [
      {
        path: 'overview',
        name: 'Overview Programme',
        component: () => import('@/views/programme/overview/index'),
        meta: { title: 'Overview', icon: 'overview' }
      },
      {
        path: 'detail/:id(\\d+)',
        component: () => import('@/views/programme/overview/detail'),
        name: 'ProgrammeDetail',
        meta: { title: 'Detail', noCache: true },
        hidden: true
      },
      {
        path: 'create',
        name: 'Create Programme',
        component: () => import('@/views/programme/create/index'),
        meta: { title: 'Create', icon: 'create' }
      }
    ]
  },

  {
    path: '/module',
    component: Layout,
    redirect: '/module/overview',
    name: 'Module',
    meta: { title: 'Module', icon: 'module' },
    children: [
      {
        path: 'overview',
        name: 'Overview Module',
        component: () => import('@/views/module/overview/index'),
        meta: { title: 'Overview', icon: 'overview' }
      },
      {
        path: 'detail/:id(\\d+)',
        component: () => import('@/views/module/overview/detail'),
        name: 'ModuleDetail',
        meta: { title: 'Detail', noCache: true },
        hidden: true
      },
      {
        path: 'create',
        name: 'Create Module',
        component: () => import('@/views/module/create/index'),
        meta: { title: 'Create', icon: 'create' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
