import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Callback from '@/components/Callback'
import ShareThoughts from '@/components/ShareThoughts'
import * as Auth0 from 'auth0-web'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '/share-your-thoughts',
      name: 'ShareThoughts',
      component: ShareThoughts,
      beforeEnter: (to, from, next) => {
        if (Auth0.isAuthenticated()) {
          return next()
        }
        next('/')
      }
    }
  ]
})
