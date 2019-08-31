import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Company from './components/Company.vue'
import Contact from './components/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Company
    },
    {
      path: '/company',
      name: 'company',
      component: Company
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
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
