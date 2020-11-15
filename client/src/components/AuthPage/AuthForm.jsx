import React from 'react'
import { Formik } from 'formik'
import { FormCustom, FormPanel, FieldCustom, ButtonSubmit, FormStatus, ErrorMessageCustom } from './styled'
import { connect } from 'react-redux'

import { singIn, singUp } from './../../redux/authReducer'

const SIGN_IN = 'SIGN_IN' // Вход
const SIGN_UP = 'SIGN_UP' // Регистрация

const AuthForm = ({ singIn, singUp }) => {

  const submitHandler = (values, { setStatus, setSubmitting }) => {
    if (values.mode === SIGN_IN) {
      singIn(values, setStatus, setSubmitting)
    } else if (values.mode === SIGN_UP) {
      singUp(values, setStatus, setSubmitting)
    }
  }

  return (
    <Formik
      initialValues={{ login: '', password: '', mode: SIGN_IN }}
      onSubmit={submitHandler}
      validate={({ login, password }) => {
        const err = {}

        if (login.length < 4)
          err.login = 'Мин. длина 4 символа'

        if (password.length < 4)
          err.password = 'Мин. длина 4 символа'

        return err
      }}
    >

      {({ errors, status, isSubmitting, setFieldValue }) => (
        <FormCustom>
          <FormPanel error={status && status.error}>
            <FieldCustom type="text" placeholder="Логин" name="login" />
            <ErrorMessageCustom name="login" component="div" />

            <FieldCustom type="password" placeholder="Пароль" name="password" />
            <ErrorMessageCustom name="password" component="div" />
          </FormPanel>

          <ButtonSubmit type="submit" onClick={() => { setFieldValue('mode', SIGN_IN, false) }} disabled={isSubmitting}>
            Войти
          </ButtonSubmit>

          <ButtonSubmit type="submit" onClick={() => { setFieldValue('mode', SIGN_UP, false) }} disabled={isSubmitting}>
            Регистрация
          </ButtonSubmit>

          {status && status.error && <FormStatus>{status.error + ' 😯'}</FormStatus>}

          {status && status.message && <FormStatus>{status.message + ' 🙂'}</FormStatus>}

        </FormCustom>
      )}

    </Formik>
  )
}

export default connect(null, {
  singIn,
  singUp
})(AuthForm)
