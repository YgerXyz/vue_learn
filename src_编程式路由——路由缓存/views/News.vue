<template>
  <ul class="News" id="News">
    <li>News <input type="text"> </li>
    <li>News <input type="text"> </li>
    <li>News <input type="text"> </li>
  </ul>
</template>

<script>
export default {
  name: "News",
  //页面销毁之前
  beforeDestroy() {
    console.log("News组件即将被销毁")
  },
}


</script>

<style scoped>
.News {
  height: 100%;
  width: 100%;
}
</style>
