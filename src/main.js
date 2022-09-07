import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)
var VueScrollTo = require('vue-scrollto');

createApp(App).component('fa', FontAwesomeIcon).use(store).use(router).use(VueScrollTo).mount('#app')
