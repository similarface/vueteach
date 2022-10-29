<template>
  <!--  组件结构-->
  <div class="demo">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">sendStudentName</button>
    <button @click="unbind">解除绑定</button>
    <button @click="death">销毁</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      msg: 'I am Student',
      name: 'ZS',
      sex: 'female'
    }
  },
  methods: {
    sendStudentName(){
      // 触发Student组件实例身上的stusend事件
      this.$emit('stusend',this.name,1,2,3)
    },
    unbind(){
      // 解除一个事件
      this.$off('stusend')
      // 解除多个事件
      // this.$off(['event1','event2'...])
      // 解除所有自定义事件
      // this.$off()
    },
    death(){
      this.$destroy()// 销毁当前Student组件实例， 销毁后自定义事件 失去
    }
  }
}
</script>

<style scoped>
/* 组件样式 */
.demo {
  background-color: red;
}
</style>