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


    /*    //自己写计算属性
        sum() {
          return this.$store.state.sum;
        },
        school() {
          return this.$store.state.school;
        },
        subject() {
          return this.$store.state.subject;
        },*/
    //借助vuexmapState生成计算属性，从state中读取属性
    /*    ...mapState({ //对象写法
          sum: "sum",
          school: "school",
          subject: "subject",
        }),*/
    ...mapState(["sum", "school", "subject","personList"]),//数组写法
    /*    bigSum() {
          return this.$store.getters.bigSum;
        },*/

    // ...mapGetters({bigSum:"bigSum"}),//对象写法
    ...mapGetters(["bigSum"]),//数组写法
  },
  data() {
    return {
      n: 1,//用户选择的数字
      // school:"SSS",//会报错误，he computed property "school" is already defined in data.，
    }
  },
  methods: {
    //手写代码
/*    increment() {
      // this.$store.dispatch('add', this.n);
      this.$store.commit('ADD', this.n);//当actions中没有业务逻辑时，可以直接commit
    },
    decrement() {
      // this.$store.dispatch('sub', this.n);
      this.$store.commit('SUB', this.n);//当actions中没有业务逻辑时，可以直接commit
    },*/
    //借助mapMutations生成代码,方法中会调用commit去联系mutations(对象写法)
    ...mapMutations({
      increment:"ADD",
      decrement:"ADD",
    }),
    // ...mapMutations(["increment"]), //数组写法, 要求键值相同

    // mapMutations 生成的代码
/*    increment(value) {
      // this.$store.dispatch('add', this.n);
      this.$store.commit('ADD', value);//当actions中没有业务逻辑时，可以直接commit
    },
    */


/*    incrementOdd() {
      this.$store.dispatch('addOdd', this.n);
    },
    incrementWait() {
      this.$store.dispatch('addWait', this.n);
    },*/
    //借助mapActions生成代码 方法中会调用dispatch去联系actions
    ...mapActions({incrementOdd:"addOdd",incrementWait:"addWait"}),//对象写法
    // ...mapActions(["incrementOdd"]),//数组写法


  }

}
</script>

