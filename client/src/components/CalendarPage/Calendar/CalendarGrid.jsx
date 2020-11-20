import React from 'react'
import { Grid, Weekday } from './styled'
import CalendarItem from './CalendarItem'

const CalendarGrid = ({ days, openEdit }) => {

  return (
    <Grid>
      <Weekday>ПН</Weekday>
      <Weekday>ВТ</Weekday>
      <Weekday>СР</Weekday>
      <Weekday>ЧТ</Weekday>
      <Weekday>ПТ</Weekday>
      <Weekday>СБ</Weekday>
      <Weekday>ВС</Weekday>

      {
        days.map((item, i) => (
          <CalendarItem
            mood={item}
            key={i}
            onClick={() => { openEdit(i + 1) }}
          >
            {i + 1}
          </CalendarItem>
        ))
      }

    </Grid>
  )
}

export default CalendarGrid
