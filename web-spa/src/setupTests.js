// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Enzyme configuration
// At the time of writing (Jan. 5th, 2022) no official adapter for React 17 has been released.
// In the meantime, I'm using an unofficial one (https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17)
// Periodically check if the official one has been released (https://enzymejs.github.io/enzyme/)
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
