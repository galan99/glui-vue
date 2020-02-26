<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<ui-button>默认按钮</ui-button>
	<ui-button @click="handleClick">点击提示消息</ui-button>
	<ui-button type="primary">主要按钮</ui-button>
	<ui-button type="success">成功按钮</ui-button>
	<ui-button type="danger">危险按钮</ui-button>
	<p>这是Switch开关</p>
	<ui-switch v-model="check"></ui-switch>
	<ui-switch v-model="check" :activeColor="'red'"></ui-switch>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import uiButton from '../packages/button'
import Toast from '../packages/toast'
import uiSwitch from '../packages/switch'

export default {
  name: 'App',
  components: {
    HelloWorld,
	uiButton,
	uiSwitch
  },
  data() {
	return {
		check: false
	}
  },
  methods:{
	handleClick(){
		Toast('提示消息')
	}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
