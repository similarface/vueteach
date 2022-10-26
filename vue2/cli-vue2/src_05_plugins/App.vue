<template>
<div>
  <Student></Student>
  <School></School>
</div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";
//引入组件
export default {
  name: 'App',
  components: {
    Student,School
  },
  methods: {
  }
}
</script>

<style>

</style>