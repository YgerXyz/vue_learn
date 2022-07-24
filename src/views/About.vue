<template>
  <div class="About" id="About">
    About
  </div>
</template>

<script>
export default {
  name: "About",
  beforeCreate() {
    console.log(this)
  },
  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from,next){
    //该方法 在beforeCreate之前调用
    console.log("beforeRouteEnter")
    next();//该函数内部会调用 router.afterEach（全局后置守卫）
    console.log("beforeRouteEnter2")
  },
  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from,next){
    //该方法 在destroyed之前调用,测试出的
    console.log("beforeRouteLeave")
    next();//该函数内部会先后调用 router.beforeEach ->router.afterEach（全局后置守卫）
    console.log("beforeRouteLeave2")
  },
  beforeDestroy() {
    console.log("destroyed")
  },
  beforeRouteUpdate(){
    console.log("beforeRouteUpdate")
  },
}
</script>
