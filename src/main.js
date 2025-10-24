import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useMainStore } from '@/stores/main.js'
import './css/main.css'

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')

const mainStore = useMainStore(pinia)

mainStore.fetchSampleClients()
mainStore.fetchSampleHistory()

const defaultDocumentTitle = 'Admin One Vue 3 Tailwind'

router.afterEach((to) => {
  document.title = to.meta?.title
    ? `${to.meta.title} — ${defaultDocumentTitle}`
    : defaultDocumentTitle
})
