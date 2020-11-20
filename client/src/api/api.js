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

export const CalendarAPI = {
  getMonth: (year, month) => {
    const token = localStorage.getItem('auth/TOKEN_STORAGE_KEY') // DEV

    return axios.get(`/api/month/${year}&${month}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(res => res.data)
  },

  setMoodDay: (year, month, day) => {
    //TODO
  }
}
