<template>
<div>
<!--  <Student name="李四" age="50"></Student>-->
<!--  <Student name="王五" age="20"></Student>-->
<!--  <Student name="赵六" :age=19></Student>-->
<!--  <Student name="田七" age=9></Student>-->
  <Student name="张三" :age="27"></Student>
<!--  <Student></Student>-->
</div>
</template>

<script>
import Student from "./components/Student";
//引入组件
export default {
  name: 'App',
  components: {
    Student
  },
  methods: {
  }
}
</script>

<style>

</style>