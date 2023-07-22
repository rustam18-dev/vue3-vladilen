import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from "@/translatePlugin";


const app = createApp(App)

const ru = {
    app: {
        title: "Как работают плагины во Vue?",
        changeBtn: 'Переключить язык',
    }
}

const en = {
    app: {
        title: "How to working plugins in Vue.js?",
        changeBtn: 'Toggle Language'
    }
}

app.use(translatePlugin, {ru, en})


app.mount('#app')
