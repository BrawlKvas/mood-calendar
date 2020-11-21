import * as axios from 'axios'

const getToken = () => localStorage.getItem('auth/TOKEN_STORAGE_KEY') //?

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
    return axios.get(`/api/month/${year}&${month}`, {
      headers: {
        Authorization: 'Bearer ' + getToken()
      }
    })
      .then(res => res.data)
  },

  setMoodDay: (year, month, day, mood = -1) => {
    return axios.put(`/api/day/${year}&${month}&${day}`, { mood }, {
      headers: {
        Authorization: 'Bearer ' + getToken()
      }
    })
  }
}
