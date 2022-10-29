<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition appear>
      <h1 v-show="isShow">Hello World</h1>
    </transition>
    <transition name="demo1" appear>
      <h1 v-show="isShow">Hello World</h1>
    </transition>
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
  .v-enter-active {
    animation: demo 0.5s linear;
  }
  .v-leave-active {
    animation: demo 0.5s linear reverse;
  }
  .demo1-enter-active {
    animation: demo 0.5s linear;
  }
  .demo1-leave-active {
    animation: demo 0.5s linear reverse;
  }
  @keyframes demo {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>