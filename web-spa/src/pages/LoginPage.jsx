import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Logo from '../images/Logo'
import AccountTypeModal from '../components/AccountTypeModal'

const LoginPage = () => {
  const [showAccountTypeModal, setShowAccountTypeModal] = useState(false)

  return (
    <Page>
      <Container>
        <LoginBox>
          <Heading>Benvenuto!</Heading>

          <StyledLogo data-testid="logo" />

          <Form>
            <Input type="text" name="username" placeholder="E-mail" data-testid="email-input" />

            <Input type="text" name="password" placeholder="Password" data-testid="password-input" />

            <SubmitButton data-testid="submit-btn">Accedi</SubmitButton>
          </Form>

          <Separator />

          <RegisterButton 
            type="button" 
            onClick={() => setShowAccountTypeModal(true)}
            data-testid="register-button"
          >
            Registrati
          </RegisterButton>
        </LoginBox>
      </Container>

      <StyledAccountTypeModal
        width="65%"
        height="65%"
        show={showAccountTypeModal}
        close={() => setShowAccountTypeModal(false)}
      />
    </Page>
  )
}

const Page = styled.div`
  display: grid;
  height: 100%;
`

const fullPageLayer = css`
  grid-column: 1;
  grid-row: 1;
`

const Container = styled.div`
  ${fullPageLayer}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffdee9;
  background-image: linear-gradient(0deg, #f3c8c5 0%, #b5fffc 100%);
`

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
  padding: 2rem;
`

const Heading = styled.h1`
  font-size: 30pt;
  margin: 0 auto;
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

const inputMixin = css`
  width: 20rem;
  height: 2.5rem;
  padding: 0 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
`

const Input = styled.input`
  ${inputMixin}
`

const buttonMixin = css`
  box-sizing: content-box;
  font-size: 1.17rem;
  cursor: pointer;
  font-weight: bolder;
`

const SubmitButton = styled.button`
  ${inputMixin}
  ${buttonMixin}
  background-color: #d98c00;
  border-color: #d98c00;
  color: #fff;

  &:hover {
    background-color: #d47900;
    border-color: #d47900;
  }

  &:active {
    background-color: #d26e00;
    border-color: #d26e00;
  }
`

const Separator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dadde1;
  display: flex;
  margin: 20px 16px;
  text-align: center;
`

const RegisterButton = styled.button`
  ${inputMixin}
  ${buttonMixin}
  background-color: #42b72a;
  border-color: #42b72a;  
  color: #fff;

  &:hover {
    background-color: #36a420;
    border-color: #36a420;
  }

  &:active {
    background-color: #2b9217;
    border-color: #2b9217;
  }
`

const StyledAccountTypeModal = styled(AccountTypeModal)`
  ${fullPageLayer}  // page overlay
`

export default LoginPage
