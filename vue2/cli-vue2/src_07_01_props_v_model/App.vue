<template>
  <div>
    <MyTop :addTodo="addTodo"></MyTop>
    <MyList :todos="todos"></MyList>
    <MyFooter></MyFooter>
  </div>
</template>

<script>

import MyTop from "@/components/MyTop";
import MyList from "@/components/MyList";
import MyFooter from "@/components/MyFooter";

//引入组件
export default {
  name: 'App',
  components: {
    MyTop, MyList, MyFooter
  },
  data() {
    return {
      todos: [
        {id: '1', title: 'smoking', done: true},
        {id: '2', title: 'driving', done: false},
        {id: '3', title: 'drinking', done: true},
      ]
    }
  },
  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    selectTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    }
  }
}
</script>

<style>

</style>