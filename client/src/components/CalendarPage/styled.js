import styled from 'styled-components'

export const Page = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Header = styled.div`
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
`

export const ExitButton = styled.button`
  font-size: 60px;
  font-weight: lighter;
  line-height: 0;
  background: none;
  outline: none;
  border: none;
  color: #7E7E7E;
  transform: rotate(45deg);
`
export const Circle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgc};
  border: none;
  border-radius: 50%;
  outline: none;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`