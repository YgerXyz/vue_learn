<template>
  <ul class="Detail" id="Detail">
    <li>{{ $route.query.id }}</li>
    <li>{{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this.$route)
  },
  computed:{
    detailData(){
      return this.$route.query;
    }
  }
}


</script>

<style scoped>
.Detail {
  height: 100%;
  width: 100%;
}
</style>
