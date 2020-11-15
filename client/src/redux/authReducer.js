import { AuthAPI } from "../api/api"

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA'
const REMOVE_AUTH_DATA = 'auth/REMOVE_AUTH_DATA'
const TOKEN_STORAGE_KEY = 'auth/TOKEN_STORAGE_KEY'

const localToken = localStorage.getItem(TOKEN_STORAGE_KEY)
const initState = {
  token: localToken || null,
  isAuth: !!localToken
}

const authReducer = (state = initState, action) => {
  switch (action.type) {

    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    case REMOVE_AUTH_DATA:
      return {
        ...state,
        token: null,
        isAuth: false
      }

    default:
      return state
  }
}

export default authReducer

const setAuthData = (data) => ({ type: SET_AUTH_DATA, data })
const removeAuthData = () => ({ type: REMOVE_AUTH_DATA })

export const singIn = ({ login, password }, setStatus, setSubmitting) => (dispatch) => {
  AuthAPI.signIn(login, password)
    .then(data => {
      dispatch(setAuthData(data))
      localStorage.setItem(TOKEN_STORAGE_KEY, data.token)
    })
    .catch(err => {
      setStatus({ error: err.data.message })
    })
    .finally(() => setSubmitting(false))
}

export const singUp = ({ login, password }, setStatus, setSubmitting) => (dispatch) => {
  AuthAPI.signUp(login, password)
    .then(data => {
      setStatus({ message: data.message })
    })
    .catch(err => {
      setStatus({ error: err.data.message })
    })
    .finally(() => setSubmitting(false))
}

export const signOut = () => (dispatch) => {
  localStorage.removeItem(TOKEN_STORAGE_KEY)
  dispatch(removeAuthData())
}