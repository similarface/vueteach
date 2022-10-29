<template>
  <div>
    <h1>{{ msg }}, 学生姓名是： {{studentName}}</h1>

    <!--    通过父组件给子组件传递函数类型的props实现 子给父传递数据-->
    <School :getSchoolName="getSchoolName"></School>
    <!--    通过父组件给子组件绑定一个自定义的事件实现： 子给父传递数据-->
    <Student v-on:stusend="getStudentName"></Student>
    <!--  @简写  通过父组件给子组件绑定一个自定义的事件实现： 子给父传递数据-->
    <Student @stusend="getStudentName"></Student>
    <!--  ref拿到vc实例  通过父组件给子组件绑定一个自定义的事件实现： 子给父传递数据 灵活-->
    <!--  click.native 修饰符 解析会把click作用于 student组件 最外层元素  -->
    <Student ref="student"  @click.native="show"/>
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

//引入组件
export default {
  name: 'App',
  components: {
    Student, School
  },
  methods: {
    getSchoolName(name) {
      console.log("school name", name)
    },
    getStudentName(name,...params) {
      this.studentName = name
      console.log('....', name)
      console.log('....', params)
    },
    show() {
      alert('123')
    }
  },
  data() {
    return {
      msg: "hello",
      studentName:''
    }
  },
  mounted() {
    setTimeout(()=>{
      this.$refs.student.$on('stusend', this.getStudentName)
      // 一次
      // this.$refs.student.$once('stusend', this.getStudentName)
    },1000)
  }
}
</script>

<style>

</style>