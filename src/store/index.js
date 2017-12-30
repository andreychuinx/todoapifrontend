import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'
import auth from './modules/auth'
import datatask from './modules/datatask'
import datatodo from './modules/datatodo'
import datauser from './modules/datauser'
import addDataTask from './modules/addDataTask'
import addDataTodo from './modules/addDataTodo'
import editDataTask from './modules/editDataTask'
import editDataTodo from './modules/editDataTodo'
import dataTaskTodos from './modules/datataskTodos'
import deleteTask from './modules/deleteTask'
import deleteTodo from './modules/deleteTodo'

Vue.use(Vuex)

const state = {
  isLoggedIn : !!localStorage.getItem('token'),
  notify : {
    message : '',
    status : '',
    type : ''
  },
  modalActive : true
}
const getters = {
  isLoggedIn: state =>{
    return state.isLoggedIn
  },
  isNotify: state =>{
    return state.notify
  }
}


export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules : {
    auth,
    datatask,
    datatodo,
    datauser,
    addDataTask,
    dataTaskTodos,
    deleteTask,
    editDataTask,
    addDataTodo,
    deleteTodo,
    editDataTodo
  },
  strict : true
})