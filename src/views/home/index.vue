<!--
 * @Description: 文件说明
 * @FilePath: \vue-base\src\views\home\index.vue
-->
<template>
  <div class="home">
    <van-notice-bar
      scrollable
      text="关注微信公众号【前端有的玩】，我们一起玩前端"
    />
    <van-list>
      <van-cell
        title="点击使用confirm装饰器"
        value="还有更多装饰器哦"
        @click="$_handleUseDecorator"
      />
      <van-cell title="加载数据" @click="$_loadData" />
      <van-cell title="使用日期工具类" :value="`今天是${currentDate}`" />
      <van-cell title="你看，右下角有一个vConsole,用来调试的" />
      <van-cell title="你再看，地址栏有一个?VNK=xxx,这是路由缓存" />
      <van-cell title="点击跳转about页面" @click="goJump" />
    </van-list>
  </div>
</template>

<script>
// 使用vant 组件
import { List, NoticeBar, Cell, Notify } from 'vant'

// 使用装饰器
import { confirm } from '@/decorator'

// 使用日期工具类
import { format, DATE_FMT } from '@/utils/date'

// 接口
import { getDemoData } from '@/api/home'

export default {
  name: 'Home',
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    [NoticeBar.name]: NoticeBar
  },
  data() {
    return {
      currentDate: format(new Date(), DATE_FMT)
    }
  },
  created() {},

  methods: {
    @confirm('这是通过装饰器添加的确认信息', '提示')
    $_handleUseDecorator() {
      console.log(`
                你还可以使用
                @alert 提示框
                @throttle 函数节流
                @debounce 函数防抖
                更多装饰器正在完善中
              `)
    },
    // 加载数据
    async $_loadData() {
      const loading = this.$loading()
      try {
        console.log(await getDemoData())
        Notify({
          message: '数据加载成功',
          type: 'success'
        })
      } catch (error) {
        console.error(error)
      } finally {
        loading.close()
      }
    },
    goJump() {
      this.$router.push({ name: 'TestAbout' })
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  /** 审查元素，这个样式会转换为 font-size: 4.267vw; */
  font-size: 16px;
}
</style>
