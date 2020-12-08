import { AuthAPI } from "../api/api"

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA'
const REMOVE_AUTH_DATA = 'auth/REMOVE_AUTH_DATA'

export const TOKEN_STORAGE_KEY = 'auth/TOKEN_STORAGE_KEY'

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

export const signIn = ({ login, password }) => async (dispatch) => {
  try {
    const res = await AuthAPI.signIn(login, password)

    localStorage.setItem(TOKEN_STORAGE_KEY, res.token)

    dispatch(setAuthData(res))

  } catch (error) {
    throw error.data.message
  }
}

export const signUp = ({ login, password }) => async () => {
  try {
    const res = await AuthAPI.signUp(login, password)

    return res.message

  } catch (error) {
    throw error.data.message
  }
}

export const signOut = () => (dispatch) => {
  localStorage.removeItem(TOKEN_STORAGE_KEY)
  dispatch(removeAuthData())
}