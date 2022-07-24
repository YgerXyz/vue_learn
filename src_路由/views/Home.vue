<template>
  <div class="Home" id="Home">
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/home/news" active-class="active" class="list-group-item">News</router-link>
        </li>
        <li>
          <router-link to="/home/message" active-class="active" class="list-group-item">Message</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
  components: {
    //  组件
  },
  data() {
    return {}
  },
  //方法 函数写这里
  methods: {},
  //页面渲染之后
  mounted() {
    // 通过接口获取数据
    // this.$bus.$on("HomeChanged", (data) => {
    //   // this.show = true;
    // });
  },
  //页面销毁之前
  beforeDestroy() {
    // this.$bus.$off("HomeChanged");
  },
  //页面销毁之后
  destroyed() {
  },
}
</script>

<style scoped>
.Home {
  height: 100%;
  width: 100%;
}
</style>
