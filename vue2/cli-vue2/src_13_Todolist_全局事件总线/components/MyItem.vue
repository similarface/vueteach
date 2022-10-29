<template>
  <div>
    <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
    <!--    <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>-->
    <span>{{ todo.title }}</span>
    <button @click="handleDeleteTodo(todo.id)">删除</button>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  props: ['todo'],
  methods: {
    handleCheck(id) {
      console.log(id)
      // this.selectTodo(id)
      this.$bus.$emit('selectTodo',id)
    },
    handleDeleteTodo(id) {
      if (confirm("是否删除1")) {
        // console.log(id)
        // this.deleteTodo(id)
        this.$bus.$emit('deleteTodo',id)
      }
    }
  }
}
</script>

<style scoped>

</style>