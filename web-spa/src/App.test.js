import { shallow } from 'enzyme';
import App from './App';
import LoginPage from './pages/LoginPage';

it('renders the login page', () => {
  const wrapper = shallow(<App />)
  
  expect(wrapper.find(LoginPage).length).toBe(1)
})
