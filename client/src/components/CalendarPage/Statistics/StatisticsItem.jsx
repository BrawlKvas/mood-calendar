import React from 'react'
import withMoodColor from '../../../hoc/withMoodColor'
import { ItemLine, ItemWrapper } from './styled';

const StatisticsItem = ({ count, moodColor }) => {
  return (
    <ItemWrapper color={moodColor}>

      <span>{count}</span>

      <ItemLine bgc={moodColor}></ItemLine>

    </ItemWrapper>
  )
}

export default withMoodColor(StatisticsItem);
