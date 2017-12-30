import axios from 'axios'
import router from '@/router'
import * as types from '../mutation_types'

const state = {
  user: {}
}

const getters = {
  throwUser: state => {
    return state.user
  }
}

const actions = {
  signup(context, { name, email, password }) {
    axios.post('/signup', {
      name,
      email,
      password
    })
      .then(result => {
        context.commit(types.SHOW_NOTIFY, {
          message : `Hei ${result.data.data.name} you success signup`,
          status : 'Signup Success',
          random : Math.random()
        }, {
          root : true
        })
        router.push({name:'loginPage'})
      })
  },
  login(context, { email, password }) {
    axios.post('/signin', {
      email,
      password
    })
      .then(result => {
        console.log(result)
        context.commit(types.LOGIN_SUCCESS)
        context.commit(types.SAVE_TOKEN, {
          token: result.data.data.authorization,
          user: result.data.data.user
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  loginWithFB(context, { accessToken }) {
    axios.post('/signin/signinfb', { access_token: accessToken })
      .then(result => {
        context.commit(types.LOGIN_SUCCESS)
        context.commit(types.SAVE_TOKEN, {
          token: result.data.data.authorization,
          user: result.data.data.user
        })
      })
  }
}

const mutations = {
  [types.LOGIN_SUCCESS](state) {
    state.isLoggedIn = true
  },
  [types.SAVE_TOKEN](state, { token, user }) {
    let dataUser = JSON.stringify(user)
    localStorage.setItem('token', token)
    localStorage.setItem('user', dataUser)
    console.log(JSON.parse(localStorage.getItem('user')))
    axios.defaults.headers.common['authorization'] = token
    router.push('/dashboard')
  },
  [types.LOGOUT](state) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}