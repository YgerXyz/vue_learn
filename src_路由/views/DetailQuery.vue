<template>
  <ul class="DetailQuery" id="DetailQuery">
    <li>{{ $route.params.id }}</li>
    <li>{{ $route.params.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "DetailQuery",
  mounted() {
    console.log(this.$route)
  },
}


</script>

<style scoped>
.DetailQuery {
  height: 100%;
  width: 100%;
  background-color: #8c8c8c;
}
</style>
