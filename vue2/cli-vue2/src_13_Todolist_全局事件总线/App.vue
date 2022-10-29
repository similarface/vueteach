<template>
  <div>
    <MyTop @addTodo="addTodo"></MyTop>
    <MyList :todos="todos" :selectTodo="selectTodo"></MyList>
    <MyFooter :todos="todos" @checkAllTodo="checkAllTodo"></MyFooter>
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
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  mounted() {
    this.$bus.$on('deleteTodo', this.deleteTodo)
    this.$bus.$on('selectTodo', this.selectTodo)
  },
  beforeDestroy() {
    this.$bus.$off(['deleteTodo','selectTodo'])
  },
  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    selectTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    deleteTodo(id) {
      console.log("app ", id)
      this.todos = this.todos.filter(todo => todo.id !== id)
      console.log(this.todos)
    },
    //全选 or 取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done
      })
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  }
}
</script>

<style>

</style>