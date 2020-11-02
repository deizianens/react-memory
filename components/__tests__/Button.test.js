import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  it('should render button without crashing', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
