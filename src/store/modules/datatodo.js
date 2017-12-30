import axios from 'axios'
import router from '@/router'
import * as types from '../mutation_types'

const state = {
  todos : []
}

const getters = {
  throwTodos : state =>{
    return state.todos
  },
  countTodos : state =>{
    return state.todos.length
  }
}

const actions = {
  dataTodos(context){
    axios.get('/todos')
    .then(result =>{
      context.commit(types.GET_TODOS, {
        data : result.data.data
      })
    })
  }
}

const mutations = {
  [types.GET_TODOS](state, { data}){
    state.todos = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}