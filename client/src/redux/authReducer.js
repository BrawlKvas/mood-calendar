import { AuthAPI } from "../api/api"

const SET_AUTH_DATA = 'SET_AUTH_DATA'

const initState = {
  token: null,
  isAuth: false
}

const authReducer = (state = initState, action) => {
  switch (action.type) {

    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }

    default:
      return state
  }
}

export default authReducer

const setAuthData = (data) => ({type: SET_AUTH_DATA, data})

export const singIn = ({ login, password }, setStatus) => (dispatch) => {
  AuthAPI.signIn(login, password)
    .then(data => {
      dispatch(setAuthData(data))
    })
    .catch(err => {
      if (err.status === 500) {
        setStatus({ error: "Сервер не отвечает" })
      } else {
        setStatus({ error: err.data.message })
      }
    })
}

export const singUp = ({ login, password }, setStatus) => (dispatch) => {
  AuthAPI.signUp(login, password)
    .then(data => {
      setStatus({ message: data.message})
    })
    .catch(err => {
      if (err.status === 500) {
        setStatus({ error: "Сервер не отвечает" })
      } else {
        setStatus({ error: err.data.message })
      }
    })
}