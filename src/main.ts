import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@routes'
import { VueQueryPlugin, QueryClient } from 'vue-query'
import { createPinia } from 'pinia'
import '@styles/index.css'
// import axios from 'axios'
// import { today, thisWeek, thisMonth, Post } from '@data/index.ts'
import { server } from './apis/browser.ts'

if (process.env.NODE_ENV === 'development') {
  server.start()
}

// function delay() {
//   return new Promise(res => {
//     setTimeout(res, 2000)
//   })
// }
//
// // @ts-ignore
// axios.get = async (url: string) => {
//   if (url === '/posts') {
//     await delay()
//     return Promise.resolve({
//       data: [today, thisWeek, thisMonth],
//     })
//   }
// }

const client = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
    },
  },
})

const app = createApp(App)

app.use(router).use(createPinia()).use(VueQueryPlugin, client)

app.mount('#app')
