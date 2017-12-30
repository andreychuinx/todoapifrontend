import axios from 'axios'
import router from '@/router'
import * as types from '../mutation_types'

const state = {
  notifAddUser : {
    result : '',
    status : false
  }
}

const getters = {
  throwAddUser : state => {
    return state.notifAddUser
  }
}

const actions = {
  addTodo (context, {name, taskId, assignUsers, description}) {
    axios.post('/todos', {
      name,
      description,
      taskId,
      assignUsers
    })
    .then(result =>{
      context.commit(types.ADD_TODO, {
        result : result.data.data
      })
    })
    .catch(err =>{
      console.log(err)
    })
  }
}

const mutations = {
  
}

export default {
  state,
  getters,
  actions,
  mutations
}