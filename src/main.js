import { createApp } from 'vue'
import './style/style.css'
import App from './App.vue'
import PiedUi from '../components/index'
// import PiedUi from 'pied-design-ui'
// import '../node_modules/pied-design-ui/dist/index.css'

createApp(App).use(PiedUi).mount('#app')
