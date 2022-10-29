<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
     <transition-group appear
     name="animate__animated animate__bounce"
                       enter-active-class="animate__swing"
                       leave-active-class="animate__backOutDown"
     >
      <h1 key="1" v-show="!isShow">Hello China1</h1>
      <h1 key="2" v-show="isShow">Hello China2</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
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


</style>