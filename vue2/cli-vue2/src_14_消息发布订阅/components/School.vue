<template>
  <!--  组件结构-->
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <hr>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'School',
  data() {
    return {
      name: 'X0001',
      address: '66666P01'
    }
  },
  mounted() {
    this.sub_id = pubsub.subscribe('hello', (msg_name, data) => {
      console.log(this)
      console.log("有人发hello消息", msg_name, data)
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.sub_id)
  }
}
</script>

<style scoped>
/* 组件样式 */
.demo {
  background-color: yellow;
}
</style>