<template>
  <div v-show="total">
    <label>
      <input type="checkbox" :checked="isAll" @click="checkAll">
    </label>
    <span>
    <span>已完成{{ doneTotal }}</span>/ 全部{{ todos.length }}
  </span>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ['todos','checkAllTodo'],
  computed: {
    total() {
      return this.todos.length
    },
    doneTotal() {
      return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0)
      }, 0)
    },
    isAll() {
      return this.doneTotal === this.total && this.total > 0
    }
  },
  methods: {
    checkAll(e){
      console.log(e.target.checked)
      this.checkAllTodo(e.target.checked)
    }
  }
}
</script>

<style scoped>

</style>