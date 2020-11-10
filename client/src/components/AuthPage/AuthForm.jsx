import React from 'react'
import { Formik } from 'formik'
import { FormCustom, FormPanel, FieldCustom, ButtonSubmit } from './styled'

const SIGN_IN = 'SIGN_IN' // Вход
const SIGN_UP = 'SIGN_UP' // Регистрация

const AuthForm = () => {
  
  const submitHandler = (value) => {
    console.log(value);
  }

  return (
    <>
      <Formik
        initialValues={{ login: '', password: '', mode: SIGN_IN }}
        onSubmit={submitHandler}
        validate={() => {

        }}
      >

        {({ setFieldValue }) => (
          <FormCustom>
            <FormPanel>
              <FieldCustom type="text" placeholder="Логин" name="login" />
              <FieldCustom type="password" placeholder="Пароль" name="password" />
            </FormPanel>

            <ButtonSubmit type="submit" onClick={() => { setFieldValue('mode', SIGN_IN, false) }}>
              Войти
            </ButtonSubmit>

            <ButtonSubmit type="submit" onClick={() => { setFieldValue('mode', SIGN_UP, false) }}>
              Регистрация
            </ButtonSubmit>
          </FormCustom>
        )}

      </Formik>
    </>
  )
}

export default AuthForm
