import './assets/main.css'

import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { h, render } from 'vue'
import ModalAlert from '@/components/ModalAlert.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)

app.mount('#app')

//Override default alert with custom Modal
window.alert = function (msg) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const modalDiv: any = document.createElement('div')
  if (modalDiv) modalDiv.innerHTML = render(h(ModalAlert, msg), modalDiv)
}

watch(
  pinia.state,
  (state) => {
    // persist the whole state to the local storage whenever it changes
    try {
      localStorage.setItem('piniaState', JSON.stringify(state))
    } catch (error) {
      console.debug('Error persisting state to local storage', error)
    }
  },
  { deep: true },
)
