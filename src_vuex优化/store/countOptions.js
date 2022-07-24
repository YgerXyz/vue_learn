
//求和相关配置
const countOptions = {
  namespaced: true,//开启命名空间，方便在使用 mapActions, mapGetters, mapMutations, mapState 时，能够正常解析
  actions: {
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
  },
  mutations: {
    //可以直接操作数据 ，大写  和actions做区分
    // 第一个参数为state
    ADD(state, value) {
      state.sum += value;
    },
    SUB(state, value) {
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    school: "school",
    subject: "前端",
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    }
  },
}
export default countOptions;
