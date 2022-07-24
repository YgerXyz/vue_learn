<template>
  <ul class="News" id="News">
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>News <input type="text"></li>
    <li>News <input type="text"></li>
    <li>News <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {opacity: 1}
  },

  //路由组件特有的钩子函数，激活
  activated() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 20);
    console.log("News组件激活了");

  },
  //路由组件特有的钩子函数，失活（从出现到消失）
  deactivated() {
    this.timer && clearInterval(this.timer);
    console.log("News组件失活了");
  },

  mounted() {
    /*    this.timer = setInterval(() => {
          this.opacity -= 0.01;
          if (this.opacity <= 0) {
            this.opacity = 1;
          }
        },20)*/
  },
  //页面销毁之前
  beforeDestroy() {
    // this.timer&&clearInterval(this.timer)
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
