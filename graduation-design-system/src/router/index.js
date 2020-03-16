import Vue from 'vue'
import Router from 'vue-router'
import Account from '../pages/account/Account'
import Home from '../pages/home/Home'
import Begin from '../pages/begin/Begin'
import Mid from '../pages/mid/Mid'
import Chosen from '../pages/chosen/Chosen'
import Paper from '../pages/paper/Paper'
import Grade from '../pages/grade/Grade'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Account',
      component: Account
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/chosen',
      name: 'Chosen',
      component: Chosen
    }, {
      path: '/begin',
      name: 'Begin',
      component: Begin
    }, {
      path: '/mid',
      name: 'Mid',
      component: Mid
    }, {
      path: '/paper',
      name: 'Paper',
      component: Paper
    }, {
      path: '/grade',
      name: 'Grade',
      component: Grade
    }
  ]
})
