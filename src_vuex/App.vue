<template>
  <div id="app">
    <Count></Count>
    <hr>
    <Person></Person>
  </div>
</template>

<script>
import Count from "./components/Count";
import Person from "./components/Person";

export default {
  name: 'App',
  components:{
    Count,Person
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
