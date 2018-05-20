import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Blog from '@/components/Blog.vue'
import Formular from '@/components/Formular.vue'

Vue.use(Router)

export default new Router({
  routes: [ //routes in route.js
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/formular',
      name: 'Formular',
      component: Formular
    }

  ]
})
