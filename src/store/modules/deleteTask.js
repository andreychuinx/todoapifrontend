import axios from 'axios'
import router from '@/router'
import * as types from '../mutation_types'

const state = {
  notifDeleteTask: {
    result: '',
    status: false
  }
}

const getters = {
  throwDeleteTask: state => {
    return state.notifDeleteTask
  }
}

const actions = {
  deleteTask(context, { id }) {
    axios.delete(`/tasks/${id}`)
      .then(result => {
        console.log(result, 'dari delete task')
        context.commit(types.REMOVE_TASK, {
          result: result
        },
          {
            root: true
          })
        context.commit(types.SHOW_NOTIFY, {
          message: `deleted Data Task ${result.data.data.name}`,
          status: 'delete Task',
          type: 'success'
        }, {
            root: true
          })
      })
      .catch(err => {
        console.log(err, 'err << ')
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