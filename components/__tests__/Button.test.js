import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button onClick={jest.fn()} />);
  });

  it('should render button without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('calls callback function when clicked', () => {
    const mockCallback = jest.fn();
    wrapper.find('button').simulate('click', {});

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
