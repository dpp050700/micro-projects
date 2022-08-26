import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import AppLayout from './components/AppLayout'

const Router = ({ routes }: any) => {
  return useRoutes(routes)
}

export default function RenderRoutes({ routes }: any) {
  const appRoutes = [...routes, { path: '*', element: <div>404</div> }]
  console.log(appRoutes)
  return (
    <BrowserRouter>
      <Router routes={appRoutes} />
    </BrowserRouter>
  )
}

export { AppLayout }
