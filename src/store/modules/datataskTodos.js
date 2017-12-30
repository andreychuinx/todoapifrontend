import axios from 'axios'
import router from '@/router'
import * as types from '../mutation_types'

const state = {
  taskTodos : []
}

const getters = {
  throwTaskTodos : state =>{
    return state.taskTodos
  }
}

const actions = {
  dataTaskTodos(context, {taskId}){
    axios.get(`/tasks/${taskId}/todos`)
    .then(result =>{
      context.commit(types.GET_TASKTODOS, {
        data : result.data.data
      })
    })
  }
}

const mutations = {
  [types.GET_TASKTODOS](state, { data }){
    state.taskTodos = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}