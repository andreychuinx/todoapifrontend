import axios from 'axios'
import router from '@/router'
import * as types from '../mutation_types'

const state = {
  tasks : []
}

const getters = {
  throwTasks : state =>{
    return state.tasks
  },
  countTasks : state =>{
    return state.tasks.length
  }
}

const actions = {
  dataTasks(context){
    axios.get('/tasks')
    .then(result =>{
      context.commit(types.GET_TASKS, {
        data : result.data.data
      })
    })
  }
}

const mutations = {
  [types.GET_TASKS](state, { data}){
    state.tasks = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}