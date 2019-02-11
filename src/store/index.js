/*
* @Author: Marte
* @Date:   2019-02-11 11:23:33
* @Last Modified by:   Marte
* @Last Modified time: 2019-02-11 16:51:39
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: mutations
})
