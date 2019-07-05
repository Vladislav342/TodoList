import Vue from 'vue'
import Router from 'vue-router'


import Home from './pages/index'
import About from './pages/about'
import Contacts from './pages/contacts'
import Users from './pages/users/index'
import UserDetail from './pages/users/detail'
import Tab1 from './pages/tabs/tab-1'
import Tab2 from './pages/tabs/tab-2'

Vue.use(Router)

export function createRouter(){
  return new Router({
    mode: 'history',
    routes:[
      {
        name:'about',
        path:'/about-us',
        component: About
      },
      {
        name:'contacts',
        path:'/contacts',
        component: Contacts
      },
      {
        name:'users-detail',
        path:'/users/:id',
        component: UserDetail
      },
      {
        name:'users',
        path:'/users',
        component: Users
      },

      {
        name:'home',
        path:'/',
        component: Home,
        children: [
          {
            name:'tab-1',
            path: 'tab-1',
            component: Tab1
          },
          {
            name:'tab-2',
            path: 'tab-2',
            component: Tab2
          }
        ]
      }

    ]
  })
}
