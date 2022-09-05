// import { lazy } from 'react'
// import vBind from '../pages/vBind.vue'
// import vModel from '../pages/vModel.vue'
// import { h } from 'vue'

const vBind = {
  name: 'vBind',
  render(h) {
    console.log(h)
    return h('div', null, 'vBind')
  }
}

const vBindDetail = {
  name: 'vBindDetail',
  render(h) {
    console.log(h)
    return h('div', null, 'vBindDetail')
  }
}

const vModel = {
  name: 'vModel',
  render(h) {
    console.log(h)
    return h('div', null, 'vModel 11')
  }
}

export default [
  {
    path: '/vue/vBind',
    component: vBind,
    name: 'vBind',
    children: [
      {
        path: '/vue/vBind/detail',
        component: vBindDetail,
        name: 'vBindDetail'
      }
    ]
  },
  {
    path: '/vue/vModel',
    component: vModel,
    name: 'vModel'
  }
]
