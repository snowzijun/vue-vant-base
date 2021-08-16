<template>
  <div>这里是about页面</div>
</template>

<script>
import { postForm } from '../../../utils/request'
import { getQueryParams } from '../../../utils/index'
export default {
  async created() {
    const result = await postForm(
      'https://www.fastmock.site/mock/b998b8888ddcd963cb77cfd52f6646fe/test/postfrom',
      {
        data: '13'
      }
    )
    console.log(result)
    console.log(getQueryParams(), this.$route.query)
  }
}
</script>

<style></style>
