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
      <!--      路由缓存技术  include（不写默认全部）支持数组写法，字符串写法(支持逗号作为分割)，参数为组件的name属性-->
      <keep-alive include="News,Message">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

}
</script>

<style scoped>
.Home {
  height: 100%;
  width: 100%;
}
</style>
