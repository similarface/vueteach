<template>
<div>
  <Student></Student>
  <School></School>
</div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

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