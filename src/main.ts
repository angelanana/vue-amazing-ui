import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'less/global.less'

import VueAmazingUI from 'components/index'
// import VueAmazingUI from '../dist/vue-amazing-ui'
// import '../dist/vue-amazing-ui.css'
// import VueAmazingUI from '../es/index'
// import '../es/vue-amazing-ui.css'
// import VueAmazingUI from '../lib/index'
// import '../lib/vue-amazing-ui.css'
// import '../dist/vue-amazing-ui.css'
// import VueAmazingUI from 'vue-amazing-ui'
// import 'vue-amazing-ui/css'

const app = createApp(App)
// window.rafTimeout = rafTimeout // 挂载到window上，全局可用，无需引入
app.use(router).use(VueAmazingUI).mount('#app')
