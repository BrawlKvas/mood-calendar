import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import ChooseMood from './ChooseMood/ChooseMood'
import CalendarGrid from './CalendarGrid'
import SelectDate from './SelectDate/SelectDate'
import { Wrapper } from './styled'
import { setMoodDay } from './../../../redux/calendarReducer'

const Calendar = ({ year, month, days, setMoodDay }) => {

  const [edit, setEdit] = useState({ day: null, editMode: false })

  const openEdit = (day) => {
    setEdit({ day, editMode: true })
  }

  const closeEdit = () => {
    setEdit({ day: null, editMode: false })
  }

  return (
    <Wrapper>

      {/* <SelectDate year={year} month={month} /> */}

      <CalendarGrid days={days} openEdit={openEdit} />

      {
        edit.editMode &&
        <ChooseMood
          year={year}
          month={month}
          day={edit.day}
          moodDay={days[edit.day - 1]}
          closeEdit={closeEdit}
          setMoodDay={setMoodDay}
        />
      }

    </Wrapper>
  )
}

const mapStateToProps = (state) => (
  {
    year: state.calendar.year,
    month: state.calendar.month,
    days: state.calendar.days
  }
)

export default connect(mapStateToProps, { setMoodDay })(Calendar) 
