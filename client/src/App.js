import React from 'react'
import AuthPage from './components/AuthPage/AuthPage'
import styled from 'styled-components'
import { Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import CalendarPageContainer from './components/CalendarPage/CalendarPageContainer'

const Wrapper = styled.div`
  max-width: 700px;
  height: 100%;
  margin: 0 auto;
`;

const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/" exact component={CalendarPageContainer} />
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/auth" component={AuthPage} />
      <Redirect to="/auth" />
    </Switch>
  )
}

const App = ({ isAuth }) => {
  const routes = useRoutes(isAuth)

  return (
    <Wrapper>

      {routes}

    </Wrapper>
  )
}

export default connect((state) => (
  {
    isAuth: state.auth.isAuth
  }
), null)(App)
