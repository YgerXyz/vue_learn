<template>
  <div class="Person" id="Person">
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件总和是{{ sum }}</h3>

    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul v-for="person in personList" :key="person.id">
      <li>{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {nanoid} from "nanoid";

export default {
  name: "Person",

  computed: {
    // ...mapState(["personList"]),
    personList() {
      return this.$store.state.personList;
    },
    sum() {
      return this.$store.state.sum;
    }
  },
  data() {
    return {
      name: "",
    }
  },
  //方法 函数写这里
  methods: {
    add() {
      const personObj = {id: nanoid(), name: this.name}

      this.$store.commit("ADD_PERSON", personObj)

      this.name = ""
    }
  },
  //页面渲染之后
  mounted() {
    // 通过接口获取数据
    // this.$bus.$on("PersonChanged", (data) => {
    //   // this.show = true;
    // });
  },
  //页面销毁之前
  beforeDestroy() {
    // this.$bus.$off("PersonChanged");
  },
  //页面销毁之后
  destroyed() {
  },
}
</script>

<style scoped>
.Person {
  height: 100%;
  width: 100%;
}
</style>
