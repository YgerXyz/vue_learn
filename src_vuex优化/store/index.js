import Vue from 'vue'


import Vuex from 'vuex'
import personOptions from "./personOptions";
import countOptions from "./countOptions";

Vue.use(Vuex)





export default new Vuex.Store({
  modules: {
    personOptions,
    countOptions,
  }
});
