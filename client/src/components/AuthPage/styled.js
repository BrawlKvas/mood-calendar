import styled from 'styled-components'
import { Form, Field } from 'formik';

export const PageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
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
  width: 85%;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
`

export const FormPanel = styled.div`
  margin-bottom: 40px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #F0F0F0;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const FieldCustom = styled(Field)`
  padding: 2px 10px;
  border: none;
  border-bottom: 2px solid #727272;
  outline: none;

  :not(:first-child) {
    margin-top: 25px;
  }
`

export const ButtonSubmit = styled.button`
  width: 50%;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  background-color: #EDD834;
  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`