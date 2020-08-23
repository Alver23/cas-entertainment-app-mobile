// Dependencies
import React from 'react';
import { Text } from 'react-native-elements';
import { shallow } from 'enzyme';

import Item from '../index';

// Mocks
import mocks from './mocks.json';

describe('Item component', () => {
  let component;

  beforeEach(() => {
    jest.useFakeTimers();
    component = shallow(<Item {...mocks} />);
  });

  it('should rendering correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should rendering correctly title and text', () => {
    const texts = component.find(Text);
    const {
      item: { title, text },
    } = mocks;
    const titleText = texts.findWhere((item) => item.text() === title).exists();

    const descriptionText = texts.findWhere((item) => item.text() === text).exists();

    expect(titleText).toBeTruthy();
    expect(descriptionText).toBeTruthy();
  });
});
