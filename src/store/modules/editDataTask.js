import axios from 'axios'
import router from '@/router'
import * as types from '../mutation_types'

const state = {
  notifEditTask : {
    result : '',
    status : false
  }
}

const getters = {
  throwEditTask : state => {
    return state.notifEditTask
  }
}

const actions = {
  editTask (context, {id, name, description, statusCompleted}) {
    axios.put(`/tasks/${id}`, {
      name,
      description,
      statusCompleted
    })
    .then(result =>{
      context.commit(types.UPDATE_TASK, {
        message : `data Task ${result.data.data.name} update successfull`,
        status : true,
        result : result.data.data
      })
      context.commit(types.UPDATE_LIST_TASK, {
        result : result.data.data
      },{
        root : true
      })
      console.log('asdasdawsxdasd')
      context.commit(types.SHOW_NOTIFY, {
        message : `data Task ${result.data.data.name} update successfull`,
        status : 'edit Task',
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
  [types.UPDATE_TASK](state, { message, status, result }) {
    let newTasks = {...this.getters.throwTasks}
    // let indexTasks = newTasks.findIndex(i => i._id === result._id)
    // newTasks.splice(indexTasks, 1, result)
   
    // this.getters.throwTasks = newTasks
    state.notifEditTask.result = message
    state.notifEditTask.status = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}