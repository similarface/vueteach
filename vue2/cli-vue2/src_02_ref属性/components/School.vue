<template>
  <!--  组件结构-->
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <hr>
  </div>
</template>

<script>
// 组件交互代码
export default {
  name: 'School',
  data() {
    return {
      name: 'X0001',
      address: '66666P01'
    }
  }
}
</script>

<style>
/* 组件样式 */
.demo {
  background-color: red;
}
</style>