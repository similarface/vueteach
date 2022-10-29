<template>
  <div>
    <ul>
      <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" :selectTodo="selectTodo" :deleteTodo="deleteTodo"></MyItem>
    </ul>
  </div>
</template>

<script>
import MyItem from "@/components/MyItem";

export default {
  name: "MyList",
  components: {MyItem},
  props: ['todos', 'selectTodo','deleteTodo']

}
</script>

<style scoped>

</style>