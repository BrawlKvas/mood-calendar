import React from 'react'
import withMoodColor from '../../../../hoc/withMoodColor'
import { ChoiseCircle } from './styled'

import tick from './../../../../access/done.svg'
import Preloader from '../../../common/Preloader'

const RadioCircle = ({ moodColor, isPicked, isFetching, onClick }) => {
  return (
    <ChoiseCircle bgc={moodColor} onClick={onClick}>
      {isPicked && <img src={tick} alt='1' />}
      {isFetching && <Preloader size={20} />}
    </ChoiseCircle>
  )
}

export default withMoodColor(RadioCircle) 
