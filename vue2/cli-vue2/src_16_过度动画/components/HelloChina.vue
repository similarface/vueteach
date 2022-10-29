<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition name="demo1" appear>
      <h1 v-show="isShow">Hello China</h1>
    </transition>
    <transition-group name="demo1" appear>
      <h1 key="1" v-show="isShow">Hello China</h1>
      <h1 key="2" v-show="isShow">Hello China</h1>
    </transition-group>
     <transition-group name="demo1" appear>
      <h1 key="1" v-show="!isShow">Hello China</h1>
      <h1 key="2" v-show="isShow">Hello China</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
  h1{
    background-color: orange;
  }

  /*进入的起点    离开的起点*/
  .demo1-enter, .demo1-leave-to{
    transform: translateX(-100%);

  }
  /*进入的终点   离开的终点*/
  .demo1-enter-to, .demo1-leave{
    transform: translateX(0);
  }

  .demo1-enter-active,.demo1-leave-active{
       transition: 0.5s linear;
  }

  /* !*离开的起点*!*/
  /*.demo1-leave {*/
  /*  transform: translateX(0);*/

  /*}*/
  /*!*离开的终点*!*/
  /*.demo1-leave-to {*/
  /*  transform: translateX(-100%);*/
  /*}*/

</style>