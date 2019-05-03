import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import D3Demo from './views/D3Demo.vue'
import GraphQLDemo from './views/GraphQLDemo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/d3',
      name: 'd3',
      component: D3Demo
    },
    {
      path: '/graphql',
      name: 'graphql',
      component: GraphQLDemo
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
