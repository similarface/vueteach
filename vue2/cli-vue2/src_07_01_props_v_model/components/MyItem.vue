<template>
  <div>
<!--    <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>-->
    <input type="checkbox" v-model="todo.done"/>
    <!--    <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>-->
    <span>{{ todo.title }}</span>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  props: ['todo']
}
</script>

<style scoped>

</style>