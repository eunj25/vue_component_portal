import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'

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
      path:'/',
      component: Home
    },
  ]
})