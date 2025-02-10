import { createRouter, createWebHashHistory } from 'vue-router'
import button from './Button'
import badge from './Badge'
import input from './Input'
import checkbox from './Checkbox'
import radio from './Radio'
import accordion from './Accordion'
import toggle from './Toggle'

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
      path:'/button',
      component: button
    },
    {
      path:'/toggle',
      component: toggle
    },
    {
      path:'/input',
      component: input
    },
    {
      path:'/checkbox',
      component: checkbox
    },
    {
      path:'/radio',
      component: radio
    },
    {
      path:'/accordion',
      component: accordion
    },
  ]
})