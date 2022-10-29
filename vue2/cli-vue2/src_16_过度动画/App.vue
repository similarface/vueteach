<template>
  <div>
    <HelloWorld></HelloWorld>
    <HelloChina></HelloChina>
    <HelloUs></HelloUs>
  </div>
</template>

<script>

import HelloWorld from "@/components/HelloWorld";
import HelloChina from "@/components/HelloChina";
import HelloUs from "@/components/HelloUs";
//引入组件
export default {
  name: 'App',
  components: {
    HelloWorld, HelloChina, HelloUs
  },
}
</script>

<style>

</style>