<template>
  <!--  组件结构-->
  <div class="demo">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">sendStudentName</button>
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
    },
    sendStudentName(){
      console.log(this.name)
      this.$bus.$emit('hello',this.name)
    }
  }
}
</script>

<style scoped>
/* 组件样式 */
.demo {
  background-color: red;
}
</style>