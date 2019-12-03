import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    add(state,{obj,id}){
   let aa= state.list.find(item=>item.id==id)
   if(!aa){
    state.list.push(obj);
    console.log(state.list);
   }
    }
  },
  actions: {
  },
  modules: {
  }
})
