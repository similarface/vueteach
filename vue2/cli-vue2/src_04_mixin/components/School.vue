<template>
  <!--  组件结构-->
  <div class="demo">
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <hr>
  </div>
</template>

<script>
// 引入混合
import {mixin} from '../mixin'

export default {
  name: 'School',
  data() {
    return {
      name: 'X0001',
      address: '66666P01'
    }
  },
  mixins: [mixin]
}
</script>

<style>
/* 组件样式 */
.demo {
  background-color: red;
}
</style>