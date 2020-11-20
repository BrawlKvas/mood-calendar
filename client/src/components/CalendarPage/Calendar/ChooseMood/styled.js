import styled, { keyframes } from "styled-components";
import { Circle } from "./../../styled";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Blackout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.3);
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
  padding: 40px 35px;
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
  width: 40px;
  height: 40px;
`
