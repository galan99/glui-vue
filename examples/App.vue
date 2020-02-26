<template>
  <div id="app">
    <HelloWorld msg="glui-vue"/>
	<h3>Button 按钮</h3>
	<ui-button>默认按钮</ui-button>
	<ui-button type="primary">主要按钮</ui-button>
	<ui-button type="success">成功按钮</ui-button>
	<ui-button type="danger">危险按钮</ui-button>
	<h3>Switch开关</h3>
	<ui-switch v-model="check"></ui-switch>
	<ui-switch v-model="check" :activeColor="'red'"></ui-switch>
	<h3>toast提示</h3>
	<ui-button @click="handleClick">点击提示消息</ui-button>
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
