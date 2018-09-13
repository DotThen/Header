import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import App from '../src/app';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Unit Tests', () => {
  it('renders correctly', () => {
    const app = shallow(<App />);
    expect(app.exists()).toBeTruthy();
  });
});
