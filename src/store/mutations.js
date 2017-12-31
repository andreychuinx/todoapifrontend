import * as types from './mutation_types'

export default {
  [types.SHOW_NOTIFY](state, { message, status, type }) {
    state.notify.message = message,
      state.notify.status = status,
      state.notify.type = type
  },
  [types.CLOSE_MODAL](state) {
    state.modalActive = false
  },
  [types.UPDATE_LIST_TASK](state, { result }) {
    state.datatask.tasks = state.datatask.tasks.map(task => {
      if (task._id == result._id) {
        return result
      }
      return task
    })
  },
  [types.UPDATE_LIST_TODO](state, { result }){
    state.datatodo.todos = state.datatodo.todos.map(todo => {
      if(todo._id == result._id){
        return result
      }
      return todo
    })
    console.log(state.datatodo.todos)
  },
  [types.REMOVE_TASK](state, { result }){
    state.datatask.tasks = state.datatask.tasks.filter(task => {
      return task._id !== result.data.data._id
    })
  },
  [types.REMOVE_TODO](state, { result }){
    state.datatodo.todos = state.datatodo.todos.filter(todo => {
      return todo._id !== result.data.data._id
    })
  },
  [types.ADD_TASK](state, { result }) {
    console.log(result, 'dari mutation' )
    state.datatask.tasks.push(result.data.data)
  },
  [types.ADD_TODO](state, { result }) {
    state.datatodo.todos.push(result)
  }
}