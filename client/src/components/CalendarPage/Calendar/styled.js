import styled from 'styled-components'
import { Circle } from '../styled'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, auto);
  justify-content: center;
  column-gap: 3%;
  row-gap: 1em;
  text-align: center;
`

export const Day = styled(Circle)`
  width: 35px;
  height: 35px;
  color: #616161;
`

export const Weekday = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #727272;
`