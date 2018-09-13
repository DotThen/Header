import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Header from '../src/Header';
import Adapter from 'enzyme-adapter-react-16';
import dummyArtist from './dummyData.jsx';

configure({ adapter: new Adapter() });

describe('App Unit Tests', () => {
  it('renders correctly', () => {
    const header = shallow(<Header artist={dummyArtist} />);
    expect(header.exists()).toBeTruthy();
  });
});
