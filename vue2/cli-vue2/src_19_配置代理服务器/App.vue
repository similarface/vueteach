<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>

import axios from 'axios'
//引入组件
export default {
  name: 'App',
  methods: {
    getStudents() {
      axios.get('http://localhost:8080/api/students').then(
          response => {
            console.log('请求成功', response.data)
          },
          error => {
            console.log('请求失败', error, error.message)
          }
      )
    }
  }
}
</script>

<style>

</style>