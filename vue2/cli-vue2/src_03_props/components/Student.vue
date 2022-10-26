<template>
  <!--  组件结构-->
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生名称：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <button @click="updateAge">age ++</button>
    <hr>
  </div>
</template>

<script>
// 组件交互代码
export default {
  name: 'Student',
  data() {
    return {
      msg: 'I am Student',
      // name: 'ZS',
      // age: 10
      // props 优先级高，但是不能修改，需要重新定义 变量
      myAge: this.age,
    }
  },
  // props: ['name','age'] //简单接受

  // 接受的同时对数据类型限制
  // props: {
  //   name:String,
  //   age:Number
  // }

  // 接受的同时对数据类型限制 和 必要性+默认值
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 0 //默认值
    }
  },
  methods: {
    updateAge() {
      this.myAge++
    }
  }
}
</script>

<style>
/* 组件样式 */
.demo {
  background-color: green;
}
</style>