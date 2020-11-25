import React from 'react'
import { connect } from 'react-redux'
import RadioCircle from './RadioCircle'
import { Block, Choice, Title, Blackout } from './styled'

const moods = ['Ужасное', 'Плохое', 'Нормальное', 'Отличное', 'Просто супер']
const monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

const ChooseMood = ({ year, month, day, moodDay, closeEdit, setMoodDay, сhangingDaysToMood }) => {

  const clickHandler = (e) => {
    if (e.target === e.currentTarget) {
      closeEdit()
    }
  }

  return (
    <Blackout onClick={clickHandler}>
      <Block>

        <Title>{day} {monthName[month - 1]}, {year}</Title>

        {
          moods.map((item, i) => (
            <Choice key={i}>
              <RadioCircle
                mood={i}
                isPicked={i === moodDay && сhangingDaysToMood[day] === undefined}
                onClick={() => { setMoodDay(year, month, day, i) }}
                isFetching={сhangingDaysToMood[day] === i}
              />
              {item}
            </Choice>
          ))
        }

      </Block>
    </Blackout>
  )
}

export default connect((state) => (
  { сhangingDaysToMood: state.calendar.сhangingDaysToMood }
), null)(ChooseMood) 
