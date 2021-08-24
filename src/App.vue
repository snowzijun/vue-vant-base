<!--
 * @Description: 文件说明
 * @FilePath: \vue-base\src\App.vue
-->
<template>
  <div id="app">
    <transition :name="transitionName">
      <navigation>
        <router-view class="router" />
      </navigation>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: 'van-slide-right'
    }
  },
  created() {
    this.$navigation.on('forward', () => {
      this.transitionName = 'van-slide-right'
    })
    this.$navigation.on('back', () => {
      this.transitionName = 'van-slide-left'
    })
  }
}
</script>

<style lang="less">
.font('Alibaba-PuHuiTi-Medium');
#app {
  height: 100vh;
  font-family: Alibaba-PuHuiTi-Medium, serif;
  background-color: #f1f3f5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @red;
}

/** 解决路由切换动画上下闪动问题 */
.router {
  position: absolute;
  top: constant(safe-area-inset-top);
  top: env(safe-area-inset-top);
  width: 100%;
  transition: all 0.377s ease;
  backface-visibility: hidden;
}
</style>
