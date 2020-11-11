import * as axios from 'axios'

export const AuthAPI = {
  signIn: (login, password) => {
    return axios.post('/api/auth/login', { login, password })
      .then(res => res.data)
      .catch(err => { throw err.response })
  },

  signUp: (login, password) => {
    return axios.post('/api/auth/reg', { login, password })
      .then(res => res.data)
      .catch(err => { throw err.response })
  }
}
