import axios from 'axios'
import router from '@/router'
import * as types from '../mutation_types'

const state = {
  users : []
}

const getters = {
  throwUsers : state =>{
    return state.users
  },
  countUsers : state =>{
    return state.users.length
  }
}

const actions = {
  dataUsers(context){
    axios.get('/users')
    .then(result =>{
      context.commit(types.GET_USERS, {
        data : result.data.data
      })
    })
  }
}

const mutations = {
  [types.GET_USERS](state, { data}){
    state.users = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}