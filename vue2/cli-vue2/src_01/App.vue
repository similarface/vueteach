<template>
<div>
  <img src="./assets/logo.png" alt="logo">
  <School></School>
  <Student></Student>
</div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";
//引入组件
export default {
  name: 'App',
  components: {
    School,
    Student
  }
}
</script>

<style>

</style>