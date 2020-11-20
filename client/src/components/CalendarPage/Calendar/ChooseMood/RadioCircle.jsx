import React from 'react'
import withMoodColor from '../../../../hoc/withMoodColor'
import { ChoiseCircle } from './styled'

import tick from './../../../../access/done.svg'

const RadioCircle = ({ moodColor, isPicked, onClick }) => {
  return (
    <ChoiseCircle bgc={moodColor} onClick={onClick}>
      {isPicked && <img src={tick} alt='1' />}
    </ChoiseCircle>
  )
}

export default withMoodColor(RadioCircle) 
