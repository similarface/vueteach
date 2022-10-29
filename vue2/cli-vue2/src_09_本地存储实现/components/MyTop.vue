<template>
  <div>
    <input type="text" placeholder="..." @keyup.enter="add">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
  name: "MyTop",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    add(e) {
      //用户的输入转为 todo对象
      if (!e.target.value.trim()) return
      const todoObj = {id: nanoid(), title: e.target.value, done: false}
      this.addTodo(todoObj)
      e.target.value = ''
    }
  },
  props:['addTodo']
}
</script>

<style scoped>

</style>