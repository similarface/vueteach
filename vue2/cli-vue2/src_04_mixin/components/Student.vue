<template>
  <!--  组件结构-->
  <div>
    <h1>{{ msg }}</h1>
    <h1>mixin data {{ x }}</h1>
    <h2 @click="showName">学生名称：{{ name }}</h2>
    <hr>
  </div>
</template>

<script>
// 局部mixin
// import {mixin,mixin2} from '../mixin'

export default {
  name: 'Student',
  data() {
    return {
      msg: 'I am Student',
      name: 'ZS',
      sex: 'female'
    }
  },
  // mixins: [mixin,mixin2]
}
</script>

<style>
/* 组件样式 */
.demo {
  background-color: green;
}
</style>