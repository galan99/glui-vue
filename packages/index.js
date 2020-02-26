import Button from './button/index.js'
import Switch from './switch/index.js'
import Toast from './toast/index.js'

const components = [
	Button,
	Switch
]

const install = function(Vue){
	components.forEach(component => {
		Vue.component(component.name, component)
	})
	
	Vue.prototype.$toast = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
	install,
	Toast,
	...components
}