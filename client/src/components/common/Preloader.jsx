import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ScreenBlackout } from './styled'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const WrapperPreloader = styled(ScreenBlackout)`
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Item = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  border: 6px solid #dfe6e9;
  border-top: 6px solid #FD5B03;

  animation: ${rotate} 1.25s infinite;
`

const Preloader = ({ size = 50 }) => {
  return (
    <Item size={size} />
  )
}

export default Preloader