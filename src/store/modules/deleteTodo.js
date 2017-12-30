import axios from 'axios'
import router from '@/router'
import * as types from '../mutation_types'

const state = {
  notifDeleteTodo : {
    result : '',
    status : false
  }
}

const getters = {
  throwDeleteTodo : state => {
    return state.notifDeleteTodo
  }
}

const actions = {
  deleteTodo (context, { id }) {
    axios.delete(`/todos/${id}`)
    .then(result =>{
      context.commit(types.REMOVE_TODO, {
        result : result,
      })
      context.commit(types.SHOW_NOTIFY, {
        message : `deleted Data Todo ${result.data.data.name}`,
        status : 'delete Todo',
        type : 'success'
      }, {
        root : true
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