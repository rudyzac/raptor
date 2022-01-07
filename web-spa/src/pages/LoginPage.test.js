import React from 'react';
import { shallow, mount } from 'enzyme';
import LoginPage from './LoginPage';
import Logo from '../images/Logo';

describe('<LoginPage />', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<LoginPage />)

    expect(wrapper.length).toBe(1)

  })
})

it('renders the app logo', () => {
  const wrapper = shallow(<LoginPage />)

  expect(wrapper.find('[data-testid="logo"]').length).toBe(1)
})

it('renders the input for the email', () => {
  const wrapper = shallow(<LoginPage />)

  expect(wrapper.find('[data-testid="email-input"]').length).toBe(1)
})

it('renders the input for the password', () => {
  const wrapper = shallow(<LoginPage />)

  expect(wrapper.find('[data-testid="password-input"]').length).toBe(1)
})

it('renders the submit button', () => {
  const wrapper = shallow(<LoginPage />)

  expect(wrapper.find('[data-testid="submit-btn"]').length).toBe(1)
})

it('renders the register button', () => {
  const wrapper = shallow(<LoginPage />)

  expect(wrapper.find('[data-testid="register-button"]').length).toBe(1)
})


// Test integrazione: (stesso file o separati?)

// test('registration button opens the account type selection modal', () => {})

// test x: input email, input pwd, submit qnd ce formik, register deve aprire modale.

