import { createApp } from 'vue'
import './assets/styles/main.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'customTheme',
        themes: {
            customTheme: {
                dark: false,
                colors: {
                    primary: '#0F172A',
                    secondary: '#8B5CF6',
                    accent: '#F59E0B',
                    background: '#F8FAFC',
                    surface: '#FFFFFF',
                }
            }
        }
    }
})

const app = createApp(App)

app.use(vuetify)
app.mount('#app')

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
})
