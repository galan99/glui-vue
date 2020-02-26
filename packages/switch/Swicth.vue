<template>
	<div class="gl-switch" 
		:class="[disabled ? 'switch-disabled': '', active ? 'switch-active': '']"
		:style="style"
		@click="click">
		<div class="switch-node"></div>
	</div>
</template>

<script>
	export default{
		name: 'gl-switch',
		props: {
			value: {
				type: [Boolean, String, Number],
				default: false
			},
			activeColor: {
				type: String,
				default: ''
			},
			disabled: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return{
				active: this.value
			}
		},
		computed: {
			style() {
				return {
					backgroundColor: this.active ? this.activeColor : '' 
				}
			}
		},
		methods: {
			click() {
				if (this.disabled) {
					return
				}
				this.active = ! this.active
				this.$emit('input', this.active)
				this.$emit('change', this.active)
			}
		}
	}
</script>

<style scoped>
.gl-switch{
	position: relative;
	display: inline-block;
	box-sizing: content-box;
	width: 2em;
	height: 1em;
	font-size: 30px;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 1em;
	cursor: pointer;
	-webkit-transition: background-color 0.3s;
	transition: background-color 0.3s;
}
.switch-active{
	background-color: #1989fa;
}
.switch-active .switch-node {
    -webkit-transform: translateX(1em);
    transform: translateX(1em);
}
.switch-disabled{
	cursor: not-allowed;
	opacity: 0.5;
}
.switch-node{
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	width: 1em;
	height: 1em;
	background-color: #fff;
	border-radius: 100%;
	box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);
	-webkit-transition: -webkit-transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
	transition: -webkit-transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
	transition: transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
	transition: transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05), -webkit-transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
}
</style>
