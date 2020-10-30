import React from 'react'
import StatisticsItem from './StatisticsItem'
import { Wrapper } from './styled'

const Statistics = (props) => {
  return (
    <Wrapper>
      
      <StatisticsItem count={0} mood={0} />
      <StatisticsItem count={0} mood={1} />
      <StatisticsItem count={0} mood={2} />
      <StatisticsItem count={0} mood={3} />
      <StatisticsItem count={0} mood={4} />
      
    </Wrapper>
  )
}

export default Statistics
