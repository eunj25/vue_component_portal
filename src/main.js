import { createApp } from 'vue'
import App from './App'
import router from './routes'

createApp(App)  
  .use(router)  // $router
  .mount('#app')