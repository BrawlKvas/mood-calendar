import { CalendarAPI } from "../api/api"
import { signOut } from "./authReducer"

const SET_YEAR = 'calendar/SET_YEAR'
const SET_MONTH = 'calendar/SET_MONTH'
const SET_DAYS = 'calendar/SET_DAYS'
const SET_DAY = 'calendar/SET_DAY'

const initState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,

  days: null
}

const calendarReducer = (state = initState, action) => {
  switch (action.type) {

    case SET_YEAR:
      return {
        ...state,
        year: action.year
      }

    case SET_MONTH:
      return {
        ...state,
        month: action.month
      }

    case SET_DAYS:
      return {
        ...state,
        days: action.days
      }

    case SET_DAY:
      const copyDays = [...state.days]
      copyDays[action.day - 1] = action.mood

      return {
        ...state,
        days: copyDays
      }

    default:
      return state
  }
}

export default calendarReducer

export const setYear = (year) => ({ type: SET_YEAR, year })
export const setMonth = (month) => ({ type: SET_MONTH, month })
export const setDays = (days) => ({ type: SET_DAYS, days })

const setDay = (day, mood) => ({ type: SET_DAY, day, mood })

export const requestDays = (year, month) => async (dispatch) => {

  try {
    const res = await CalendarAPI.getMonth(year, month)

    if (res.data.length)
      dispatch(setDays(res.data))

  } catch (e) {
    if (e.response.status === 401)
      dispatch(signOut())
  }

}

export const setMoodDay = (year, month, day, mood) => async (dispatch) => {

  try {
    await CalendarAPI.setMoodDay(year, month, day, mood)

    dispatch(setDay(day, mood))

  } catch (e) {
    if (e.response.status === 401)
      dispatch(signOut())
  }

}