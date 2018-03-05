import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Blog from '@/components/blog'
import Index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: '你好',
      component: HelloWorld
    },
    {
      path: '/',
      name: '主页',
      component: Index,
      children: [
        {
          path: 'blog',
          name: '博客',
          component: Blog
        }
      ]
    }
  ]
})
