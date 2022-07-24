import axios from 'axios'
import {nanoid} from "nanoid";

//人员管理相关配置
const personOptions = {
  namespaced: true,//开启命名空间，方便在使用 mapActions, mapGetters, mapMutations, mapState 时，能够正常解析
  actions: {
    addPersonWang(content, value) {
      if (value.name.indexOf("王") === 0) {
        content.commit("ADD_PERSON", value)
      } else {
        alert("添加的人必须姓王")
      }
    },
    //从后台服务器拿取数据
    addPersonServer(content){
      axios.get("https://v1.hitokoto.cn/?encode=json").then(res=>{
        content.commit("ADD_PERSON",{id:nanoid(),name:res.data.from})
        // res.data.from
      }).catch(error=>{
        alert(error.message);
      })
    }
  },
  mutations: {
    ADD_PERSON(state, value) {
      state.personList.unshift(value);
      // state.personList.push(value);
    },
  },
  state: {
    personList: [
      {id: "0001", name: "张三"},
    ]
  },
  getters: {
    firstPersonName(state) {
      return state.personList[0].name;
    }

  },
}
export default personOptions;
