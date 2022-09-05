import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import AppLayout from './components/AppLayout'

const Router = ({ routes }: any) => {
  return useRoutes(routes)
}

function Test({ component }: any) {
  const app = new Vue({
    render: (h) => {
      return h(component)
    }
  })
  setTimeout(() => {
    app.$mount('#test', true)
  }, 100)
  return (
    <AppLayout>
      <div id='test' />
    </AppLayout>
  )
}

export default function RenderRoutes({ routes }: any) {
  const appRoutes = [...routes, { path: '*', element: <div>404</div> }]
  const vueC = appRoutes.filter((item) => !item.element)
  const reactC = appRoutes.filter((item) => item.element)
  console.log(vueC)
  const list = vueC.map((item) => {
    const { component, ...extra } = item
    return {
      element: <Test component={component} />,
      ...extra
    }
  })

  return (
    <BrowserRouter>
      <Router routes={[...list, ...reactC]} />
    </BrowserRouter>
  )
}

export { AppLayout }
