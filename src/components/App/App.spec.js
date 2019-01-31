import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  it('should render a <div />', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
