<template>
<div>
  <img src="./assets/logo.png" alt="logo">
  <h1 ref="h1">hello WB</h1>
  <School></School>
  <School></School>
  <School ref="school"></School>
  <Student></Student>
  <button ref="btn" @click="showDOM">Click Show DOM</button>
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
  },
  methods: {
    showDOM(){
      console.log(this.$refs.school) //School组件 vc
      console.log(this.$refs.h1) // 真实Dom
      console.log(this.$refs)
    }
  }
}
</script>

<style>

</style>