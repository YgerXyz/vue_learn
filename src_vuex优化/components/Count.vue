<template>
  <div class="hello">
    <h1>当前求和为：{{ sum }}</h1>
    <h1>放大10倍：{{ bigSum }}</h1>
    <h3>{{ school }}--->{{ subject }}</h3>

    <h3 style="color: red">Person组件人数是{{personList.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">加</button>
    <button @click="decrement(n)">减</button>
    <button @click="incrementOdd(n)">当前求和为奇数在加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'Count',
  computed: {

    /*    ...mapState({   }),*///对象写法
    ...mapState("countOptions",["sum", "school", "subject","personList"]),//数组写法

    //该命名空间是personOptions
    ...mapState("personOptions",["personList"]),//数组写法
    // ...mapGetters({bigSum:"bigSum"}),//对象写法
    ...mapGetters("countOptions",["bigSum"]),//数组写法
  },
  data() {
    return {
      n: 1,//用户选择的数字
    }
  },
  methods: {
    //手写代码

    //借助mapMutations生成代码,方法中会调用commit去联系mutations(对象写法)
    ...mapMutations("countOptions",{
      increment:"ADD",
      decrement:"ADD",
    }),
    // ...mapMutations(["increment"]), //数组写法, 要求键值相同

    //借助mapActions生成代码 方法中会调用dispatch去联系actions
    ...mapActions("countOptions",{incrementOdd:"addOdd",incrementWait:"addWait"}),//对象写法
    // ...mapActions(["incrementOdd"]),//数组写法

  }

}
</script>

