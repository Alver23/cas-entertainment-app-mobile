// Dependencies
import React, { Dispatch } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import AppIntroSlider from 'react-native-app-intro-slider';

// Components
import { AppIntro } from '../index';

// Mocks
import itemMocks from '../components/item/__tests__/mocks.json';

describe('AppIntro container', () => {
  let component: ShallowWrapper;

  const mockRef = { current: { goToSlide: jest.fn() } };

  const props = {
    onSkip: (): jest.Mock => jest.fn(),
  };

  const mockState: [unknown, Dispatch<Function>] = [1, jest.fn()];

  beforeEach(() => {
    jest.spyOn(React, 'useState').mockReturnValueOnce(mockState);
    jest.spyOn(React, 'useRef').mockReturnValue(mockRef);
    component = shallow(<AppIntro {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the onSlidechange and nextSlide callback', () => {
    const { onSlideChange, renderNextButton, renderDoneButton, renderItem } = component.find(AppIntroSlider).props();
    onSlideChange();
    renderNextButton().props.onPress();
    expect(mockState[1]).toHaveBeenCalled();
    expect(mockRef.current.goToSlide).toHaveBeenCalled();
    expect(renderDoneButton().props).toEqual(
      expect.objectContaining({
        title: expect.any(String),
      }),
    );
    expect(renderItem({ item: { ...itemMocks.item } }).props).toEqual(
      expect.objectContaining({
        item: expect.any(Object),
      }),
    );
  });
});
