<template>
  <!--  组件结构-->
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生名称：{{ name }}</h2>
    <input type="text" v-fbind:value="name">
    <button @click="test">Hello</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      msg: 'I am Student',
      name: 'ZS',
      sex: 'female'
    }
  },
  methods: {
    test(){
      this.hello()
    }
  }
}
</script>

<style>
/* 组件样式 */
.demo {
  background-color: green;
}
</style>