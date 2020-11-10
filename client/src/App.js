import React from 'react'
import AuthPage from './components/AuthPage/AuthPage'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 700px;
  height: 100%;
  margin: 0 auto;
  /* border-left: 1px solid; // Для разработки
  border-right: 1px solid; */
`;

const App = () => {
  return (
    <Wrapper>

      <AuthPage />
      
    </Wrapper>
  )
}

export default App
