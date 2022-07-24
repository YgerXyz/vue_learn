<template>
  <div class="Person" id="Person">
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件总和是{{ sum }}</h3>
    <h3>{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的</button>
    <button @click="addServer">从服务器添加一个</button>
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
    personList() {
      return this.$store.state.personOptions.personList;
    },
    sum() {
      //state是以对象作为层级节点的，  a.b  a.c
      return this.$store.state.countOptions.sum;
    },

    firstPersonName(){
      return this.$store.getters["personOptions/firstPersonName"];
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


      // commit 向mutations提交数据时，需要使用  "a/b" 作为名称  getter同理
      this.$store.commit("personOptions/ADD_PERSON", personObj)

      this.name = ""
    },
    addWang() {
      const personObj = {id: nanoid(), name: this.name}

      this.$store.dispatch("personOptions/addPersonWang", personObj)
      this.name = ""
    },

    addServer(){
      this.$store.dispatch("personOptions/addPersonServer")
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
