import Vue from 'vue'


import Vuex from 'vuex'

Vue.use(Vuex)
//用于响应组件中的动作
const actions = {
  //miniStore ，上下文
  add(context, value) {
    context.commit("ADD", value);
  },
  sub(context, value) {
    context.commit("SUB", value);
  },

  addOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit("ADD", value);
    }
  },
  addWait(context, value) {
    setTimeout(() => {
      context.commit("ADD", value);
    }, 500)
  },

}
//用于操作数据
const mutations = {

  //可以直接操作数据 ，大写  和actions做区分
  // 第一个参数为state
  ADD(state, value) {
    state.sum += value;
  },
  SUB(state, value) {
    state.sum -= value;
  },

  ADD_PERSON(state,value){
    state.personList.unshift(value);
    // state.personList.push(value);
  },
}

//用于存储数据
const state = {
  sum: 0,
  school:"school",
  subject:"前端",

  personList:[{
    id:"0001",name:"张三"
  }]
}
//用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum*10;
  }

}
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
