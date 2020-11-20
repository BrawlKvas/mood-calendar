import React from 'react'
import StatisticsItem from './StatisticsItem'
import { Wrapper } from './styled'

const Statistics = React.memo(({ arrayMoods }) => {

  const values = [0, 0, 0, 0, 0]

  arrayMoods.forEach(item => {
    if (item !== -1)
      values[item]++
  });

  return (
    <Wrapper>

      <StatisticsItem count={values[0]} mood={0} />
      <StatisticsItem count={values[1]} mood={1} />
      <StatisticsItem count={values[2]} mood={2} />
      <StatisticsItem count={values[3]} mood={3} />
      <StatisticsItem count={values[4]} mood={4} />

    </Wrapper>
  )
})

export default Statistics
