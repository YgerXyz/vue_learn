<template>
  <div class="Banner" id="Banner">
    <div class="col-xs-offset-2 col-xs-8">
      <div class="page-header"><h2>Vue Router Demo</h2></div>
      <button @click="back">后退</button>
      <button @click="forword">前进</button>
      <button @click="testGo">测试go方法</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      this.$router.back();//后退
    },
    forword() {
      this.$router.forward();//前进
    },
    testGo() {

      let num = 1;//表示前进或后退或前进的步数，负数为后退，正数为前进
      this.$router.go(num);
    },
  }
}
</script>
