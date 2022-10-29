<template>
  <div>
    <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
    <!--    <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>-->
    <span v-show="!todo.isEdit">{{ todo.title }}</span>
    <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo,$event)" ref="inputTitle">
    <button v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
    <button @click="handleDeleteTodo(todo.id)">删除</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: "MyItem",
  props: ['todo'],
  methods: {
    handleCheck(id) {
      console.log(id)
      // this.selectTodo(id)
      // this.$bus.$emit('selectTodo',id)
      pubsub.publish('selectTodo', id)
    },

    handleDeleteTodo(id) {
      if (confirm("是否删除1")) {
        // console.log(id)
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo',id)
        pubsub.publish('deleteTodo', id)
      }
    },

    handleEdit(todo) {
      if (Object.prototype.hasOwnProperty.call(todo, 'isEdit')) {
        todo.isEdit = true
      } else {
        this.$set(todo, 'isEdit', true)
      }
      this.$nextTick(function (){
        this.$refs.inputTitle.focus()
      })
    },
    //失去焦点回调
    handleBlur(todo, e) {
      todo.isEdit = false
      if (e.target.value.trim()){
        this.$bus.$emit('updateTodo', todo.id, e.target.value)
      }
    }
  }
}
</script>

<style scoped>

</style>