import React from 'react'
import { connect } from 'react-redux'
import { setYear, setMonth } from './../../../../redux/calendarReducer'

import { OptionCustom, SelectCustom, Wrapper } from './styled'

const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек',]
const years = [2017, 2018, 2019, 2020, 2021]

const SelectDate = ({ year, month, setYear, setMonth }) => {

  const changeMonth = (e) => {
    setMonth(e.target.value)
  }

  const changeYear = (e) => {
    setYear(e.target.value)
  }

  return (
    <Wrapper>
      <SelectCustom defaultValue={month} onChange={changeMonth}>
        {
          months.map((item, i) => (
            <OptionCustom key={i} value={i + 1}>{item}.</OptionCustom>
          ))
        }
      </SelectCustom>

      <SelectCustom defaultValue={year} onChange={changeYear}>
        {
          years.map((item, i) => (
            <OptionCustom key={i} value={item}>{item}</OptionCustom>
          ))
        }
      </SelectCustom>
    </Wrapper>
  )
}

export default connect(null, {
  setYear,
  setMonth
})(SelectDate)
