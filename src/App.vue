<template>
  <div id="app">
    <div class="row">
      <Banner></Banner>

    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link to="/home"  active-class="active" class="list-group-item">Home</router-link>
          <router-link to="/about" active-class="active"  class="list-group-item">About</router-link>
          <!-- <a href="/home.html" class="list-group-item">home</a>-->
          <!-- <a href="/about.html" class="list-group-item">about</a>-->
        </div>
      </div>

      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Banner from "./components/Banner";

export default {
  name: 'App',
  components: {
    Banner,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  height: 100%;
  width: 100%;
}
</style>
