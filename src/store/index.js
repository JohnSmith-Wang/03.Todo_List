import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LS = {
  save(data){
    localStorage.setItem('todo-list',JSON.stringify(data))
  },
  load(){
    return JSON.parse(localStorage.getItem('todo-list') || '[]')
  }
}

const Tab = {
  all(todo){
    return todo
  },
  active(todo){
    return todo.filter(item => {
      return !item.complete
    })
  },
  complete(todo){
    return todo.filter(item => {
      return item.complete
    })
  }
}

export default new Vuex.Store({
  strict:true,
  state: {
    todos:[
      {content:'A-content',complete:false},
      {content:'B-content',complete:true},
      {content:'C-content',complete:false},
    ]
  },
  getters:{
    todoIndex(state){
      return Tab[state.route.name](state.todos).map(item => state.todos.indexOf(item)) 
      /*去與原來的todos陣列比較，相同的物件內容在第幾個位置 */
      /*會回傳一個數字陣列，該陣列內的數字為todos陣列的第幾個位置*/
    }
  },
  mutations: {
    SET_TODO(state,data){
      state.todos = data;
      LS.save(state.todos);
    },
    ADD_TODO(state,data){
      state.todos.push(data);
      LS.save(state.todos);
    },
    UPDATE_TODO(state,{index,data}){
      state.todos[index].content = data.content;
      state.todos[index].complete = data.complete;
      LS.save(state.todos);
    },
    DEL_TODO(state,index){
      state.todos.splice(index,1);
      LS.save(state.todos);
    }
  },
  actions: {
    INIT_TODO({commit}){
      commit('SET_TODO',LS.load())
    }
  },
})
