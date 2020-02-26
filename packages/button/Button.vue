<template>
  <div class="button-box">
	<button :class="[type ? 'btn-' + type : '', 'btn-default']" @click="handleClick">
		<span><slot></slot></span>
	</button>
  </div>
</template>

<script>
	export default {
		name: 'gl-button',
		props: {
			type: {
				type: String,
				default: 'default'
			}
		},
		methods: {
			handleClick(){
				this.$emit('click')
			}
		}
	}
</script>

<style scoped>
.button-box{
	display: inline-block;
}
.btn-default{
	display: inline-block;
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
	background: #fff;
	border: 1px solid #dcdfe6;
	color: #606266;
	-webkit-appearance: none;
	text-align: center;
	box-sizing: border-box;
	outline: none;
	margin: 0;
	transition: .1s;
	font-weight: 500;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	padding: 10px 15px;
	font-size: 14px;
	border-radius: 4px;
}
.btn-primary{
	background: #409eff;
	border-color: #409eff;
	color: #fff;
}
.btn-success{
	background: #67c23a;
	border-color: #67c23a;
	color: #fff;
}
.btn-danger{
	background: #f56c6c;
	border-color: #f56c6c;
	color: #fff;
}
</style>
