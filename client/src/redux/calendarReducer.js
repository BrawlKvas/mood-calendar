import { CalendarAPI } from "../api/api"
import { signOut } from "./authReducer"

const SET_YEAR = 'calendar/SET_YEAR'
const SET_MONTH = 'calendar/SET_MONTH'
const SET_DAYS = 'calendar/SET_DAYS'
const SET_DAY = 'calendar/SET_DAY'
const SET_IS_LOADING_DAYS = 'calendar/SET_IS_LOADING_DAYS'
const ADD_CHANGING_DAY = 'calendar/ADD_CHANGING_DAY'
const REMOVE_CHANGING_DAY = 'calendar/REMOVE_CHANGING_DAY'

const initState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,

  days: new Array(33 - new Date(new Date().getFullYear(), new Date().getMonth(), 33).getDate()).fill(-1),

  isLoadingDays: false,

  сhangingDaysToMood: {}
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

    case SET_IS_LOADING_DAYS:
      return {
        ...state,
        isLoadingDays: action.value
      }

    case ADD_CHANGING_DAY:
      return {
        ...state,
        сhangingDaysToMood: {
          ...state.сhangingDaysToMood,
          [action.day]: action.mood
        }
      }

    case REMOVE_CHANGING_DAY: {
      if (state.сhangingDaysToMood[action.day] !== action.mood) 
        return state

      const copy = { ...state.сhangingDaysToMood }
      delete copy[action.day]

      return {
        ...state,
        сhangingDaysToMood: copy
      }
    }


    default:
      return state
  }
}

export default calendarReducer

export const setYear = (year) => ({ type: SET_YEAR, year })
export const setMonth = (month) => ({ type: SET_MONTH, month })
export const setDays = (days) => ({ type: SET_DAYS, days })
export const setIsLoadingDays = (value) => ({ type: SET_IS_LOADING_DAYS, value })
export const addChangingDay = (day, mood) => ({ type: ADD_CHANGING_DAY, day, mood })
export const removeChangingDay = (day, mood) => ({ type: REMOVE_CHANGING_DAY, day, mood })


const setDay = (day, mood) => ({ type: SET_DAY, day, mood })

export const requestDays = (year, month) => async (dispatch, getState) => {
  try {
    await dispatch(setIsLoadingDays(true))

    const res = await CalendarAPI.getMonth(
      year || getState().calendar.year,
      month || getState().calendar.month
    )

    if (res.data.length)
      dispatch(setDays(res.data))

  } catch (e) {
    if (e.response.status === 401)
      dispatch(signOut())
  }

  dispatch(setIsLoadingDays(false))
}

export const setMoodDay = (year, month, day, mood) => async (dispatch) => {
  try {
    await dispatch(addChangingDay(day, mood))
    await CalendarAPI.setMoodDay(year, month, day, mood)

    dispatch(setDay(day, mood))

  } catch (e) {
    if (e.response.status === 401)
      dispatch(signOut())
  }

  await dispatch(removeChangingDay(day, mood))

}