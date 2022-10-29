<template>
  <div>
    <ul>
      <transition-group name="demo1">
        <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></MyItem>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import MyItem from "@/components/MyItem";

export default {
  name: "MyList",
  components: {MyItem},
  props: ['todos']

}
</script>

<style scoped>
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