import { createRouter, createWebHashHistory } from 'vue-router'
import button from './Button'
import badge from './Badge'
import input from './Input'
import selectbox from './Selectbox'

export default createRouter({
  // Hash
  // https://www.google.com/#/
  history: createWebHashHistory(),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  // page
  // https://www.google.com/about
  routes: [
    {
      path:'/badge',
      component: badge
    },
    {
      path:'/button',
      component: button
    },
    {
      path:'/input',
      component: input
    },
    {
      path:'/selectbox',
      component: selectbox
    },
  ]
})