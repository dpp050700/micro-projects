import React from 'react'
// import app from '../bootstrap'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
/* 主程序 */
import App from '../App.vue'
import routes from '@/routes'

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes // `routes: routes` 的缩写
})

function Index() {
  React.useEffect(() => {
    const app = createApp(App)
    app.use(router)
    app.mount('#tttt')

    return () => {
      app.unmount()
    }
  }, [])
  return <div id='tttt'>111111121</div>
}

export default Index
