import Vue from 'vue'

import Router from 'vue-router'
import Home from '@/components/home'
import Car from '@/components/car'

Vue.use(Router);

export default new Router({
  routes: [

    {
        path: '/',
        name: 'Home',
        component: Home
    },

     {
        path: '/cars/:name',
        name: 'Car',
        component: Car
     }
  ]
})
