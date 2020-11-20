import React from 'react'
import withMoodColor from '../../../hoc/withMoodColor'
import { Day } from './styled'

const CalendarItem = ({ children, moodColor, onClick }) => {
  return (
    <Day bgc={moodColor} onClick={onClick} >{children}</Day>
  )
}

export default withMoodColor(CalendarItem)
