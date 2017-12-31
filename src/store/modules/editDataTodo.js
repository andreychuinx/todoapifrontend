import axios from 'axios'
import router from '@/router'
import * as types from '../mutation_types'

const state = {
  notifEditTodo : {
    result : '',
    status : false
  }
}

const getters = {
  throwEditTodo : state => {
    return state.notifEditTodo
  }
}

const actions = {
  editTodo (context, {id, name, description, taskId, statusCompleted, assignUsers}) {
    axios.put(`/todos/${id}`, {
      name,
      description,
      taskId,
      assignUsers,
      statusCompleted
    })
    .then(result =>{
      context.commit(types.UPDATE_TODO, {
        message : `data Todo ${result.data.data.name} update successfull`,
        status : true,
        result : result.data.data
      })
      context.commit(types.UPDATE_LIST_TODO, {
        result : result.data.data
      },{
        root : true
      })
      context.commit(types.SHOW_NOTIFY, {
        message : `data Todo ${result.data.data.name} update successfull`,
        status : 'edit Todo',
        random : Math.random()
      }, {
        root : true
      })
      console.log('asdasd')
    })
    .catch(err =>{
      console.log(err)
    })
  }
}

const mutations = {
  [types.UPDATE_TODO](state, { message, status, result }) {
    
    let newTodos = {...this.getters.throwTodos}

    // let indexTodos = newTodos.findIndex(i => i._id === result._id)
    // newTodos.splice(indexTodos, 1, result)
   
    // this.getters.throwTodos = newTodos
    state.notifEditTodo.result = message
    state.notifEditTodo.status = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}