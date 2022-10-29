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
import pubsub from 'pubsub-js'
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
    // this.$bus.$on('deleteTodo', this.deleteTodo)
    // this.$bus.$on('selectTodo', this.selectTodo)
    this.$bus.$on('updateTodo', this.updateTodo)
    this.d_pid = pubsub.subscribe('deleteTodo',this.deleteTodo)
    this.s_pid =  pubsub.subscribe('selectTodo',this.selectTodo)
  },
  beforeDestroy() {
    // this.$bus.$off(['deleteTodo','selectTodo'])
    this.$bus.$off('updateTodo')
    pubsub.unsubscribe(this.d_pid)
    pubsub.unsubscribe(this.s_pid)
  },

  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    selectTodo(msg_name,id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    updateTodo(id,title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.title = title
      })
    },
    deleteTodo(msg_name,id) {
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