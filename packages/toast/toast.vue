<template>
  <transition name="fade">
    <div class="cmTips" v-show="show">
      <p>{{message}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'gl-toast',
  data () {
    return {
      show: false,
      message: ''
    }
  }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.cmTips {
  position: fixed;
  left: 0;
  top:0;
  width: 100%;
  height:100%;
  z-index: 99999;
}
.cmTips p {
  position: absolute;
  left:50%;
  transform: translateX(-50%);
  top: 20px;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.7);
  font-size: 14px;
  padding: 10px 5px;
  min-width: 200px;
  max-width: 750px;
  color:#fff;
  line-height: 16px;
  text-align: center;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
