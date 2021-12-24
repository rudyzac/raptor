import React from 'react'
import styled from 'styled-components'
import Logo from '../icons/Logo'

const LoginPage = () =>
  <Container>
    <Heading>Benvenuto!</Heading>
    <StyledLogo />
    <Form>      
      <Input type="text" name="username" placeholder="Indirizzo e-mail"></Input>

      <Input type="text" name="password" placeholder="Password"></Input>

      <SubmitButton type="submit" value="ACCEDI"></SubmitButton>
    </Form>
  </Container>

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFDEE9;
  background-image: linear-gradient(0deg, #F3C8C5 0%, #B5FFFC 100%);
`

const Heading = styled.h1`
  font-size: 32;
  margin-top: 2rem;
  margin-bottom: 0;
  color: #0f2f69;
`

const StyledLogo = styled(Logo)`
  margin: 2rem 0;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Input = styled.input`
  width: 20rem;
  height: 2.5rem;
  padding: 0 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
`

const SubmitButton = styled(Input)`
  box-sizing: content-box;
  background-color: #F0D096;
  border-color: #F0D096;
  color: #0f2f69;
  font-size: 1.17rem;
  cursor: pointer;
  font-weight: bolder;

  &:hover {
    background-color: #E9BA63;
    border-color: #E9BA63;
  }
`

export default LoginPage
