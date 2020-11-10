import React from 'react'
import AuthForm from './AuthForm'
import { LeftCircle, RightCircle, PageWrapper } from './styled'

const AuthPage = () => {
  return (
    <PageWrapper>

      <LeftCircle />
      <RightCircle />

      <AuthForm />

    </PageWrapper>
  )
}

export default AuthPage
