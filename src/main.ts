import {createApp} from 'vue'
// import 'normalize.css/normalize.css'
// @ts-ignore
import App from './App.vue'
const app = createApp(App)
app.mount('#root')
app.config.devtools = true
