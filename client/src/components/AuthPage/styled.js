import styled from 'styled-components'
import { Form, Field, ErrorMessage } from 'formik';

export const PageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const Circle = styled.div`
  position: absolute;
  z-index: -1;
  width: 90%;
  height: width;
  top: 0;
  border-radius: 50%;

  :before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`

export const LeftCircle = styled(Circle)`
  left: -35%;
  transform: translateY(-45%);
  background-color: #F1E058;
`

export const RightCircle = styled(Circle)`
  left: 35%;
  transform: translateY(-60%);
  background-color: #EDD834;
`

export const FormCustom = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormPanel = styled.div`
  width: 85%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.error ? "red" : "#F0F0F0"} ;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const FieldCustom = styled(Field)`
  padding: 2px 10px;
  border: none;
  border-bottom: 2px solid #727272;
  outline: none;
  font-size: 16px;

  :not(:first-child) {
    margin-top: 25px;
  }
`

export const ButtonSubmit = styled.button`
  width: 50%;
  margin: 0 auto;
  margin-top: 25px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  background-color: #EDD834;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: #EDD034;
  }
`

export const FormStatus = styled.div`
  margin-top: 10px;
`

export const ErrorMessageCustom = styled(ErrorMessage)`
  font-size: 12px;
  color: red;
`