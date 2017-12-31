import axios from 'axios'
import router from '@/router'
import * as types from '../mutation_types'

const state = {
  notifAddTask : {
    result : '',
    status : false
  }
}

const getters = {
  throwAddTask : state => {
    return state.notifAddTask
  }
}

const actions = {
  addTask (context, {name, description}) {
    axios.post('/tasks', {
      name,
      description
    })
    .then(result =>{
      context.commit(types.ADD_TASK, {
        result : result,
      })
      context.commit(types.SHOW_NOTIFY, {
        message : `data Task ${result.data.data.name} created successfull`,
        status : 'create Task',
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