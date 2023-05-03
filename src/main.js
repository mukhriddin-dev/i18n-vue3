import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createI18n, useI18n} from 'vue-i18n'
import {defaultLocale, languages} from './languages'
import './assets/main.css'


const message = Object.assign(languages);
const localLang = localStorage.getItem('lang');

const i18n = createI18n({
    legacy: false,
    locale: localLang || defaultLocale,
    fallbackLocale: "en",
    message
})


const app = createApp(App)

app.use(router)
app.use(useI18n)
app.mount('#app')
