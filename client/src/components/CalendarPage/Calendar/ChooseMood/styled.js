import styled, { keyframes } from "styled-components";
import { ScreenBlackout } from "../../../common/styled";
import { Circle } from "./../../styled";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Blackout = styled(ScreenBlackout)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
`

const backInUp = keyframes`
  from {
    margin-bottom: -5000px;
  }

  to {
    margin-bottom: 20px;
  }
`

export const Block = styled.div`
  overflow-y: auto;
  width: 90%;
  height: 70%;
  margin-bottom: -5000px;
  padding: 30px 35px;
  border-radius: 10px;
  background-color: #fff;

  animation: ${backInUp} .7s forwards;
`

export const Title = styled.h3`
  text-align: center;
  font-size: 16px;
  margin-bottom: 30px;
`

export const Choice = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  font-size: 16px;

  :not(:first-child) {
    margin-top: 15px;
  }
`

export const ChoiseCircle = styled(Circle)`
  width: 35px;
  height: 35px;
`
