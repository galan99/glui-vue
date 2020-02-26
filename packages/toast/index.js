import Vue from 'vue'
import toastNode from './toast.vue'

const ToastVue = Vue.extend(toastNode)
let timer = null
let instance = null

let Toast = (text) => {
  if (!text) return
  if (timer) {
    clearTimeout(timer)
    instance.show = false
  }
  if (!instance) {
    instance = new ToastVue({
      el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
  }
  Vue.nextTick(() => {
    instance.show = true
    instance.message = text
  })
  timer = setTimeout(() => {
    instance.show = false
  }, 2000)
}

export default Toast