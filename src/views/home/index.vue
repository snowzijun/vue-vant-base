<template>
  <div class="home">
    <span>关注微信公众号【前端有的玩】，我们一起玩前端</span>
    <van-button size="small" type="primary">
      好的
    </van-button>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'Home',
  components: {
    [Button.name]: Button
  },
  created() {},
  methods: {}
}
</script>
<style lang="less" scoped>
.home {
  font-size: 16px;
}
</style>
