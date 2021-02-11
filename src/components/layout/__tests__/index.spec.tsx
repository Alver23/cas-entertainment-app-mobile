// React
import React, { PropsWithChildren, ReactElement } from 'react';
import { Text } from 'react-native';
import { shallow, ShallowWrapper } from 'enzyme';

// Components
import { LayoutView } from '../index';

describe('LayoutView component', () => {
  let component: ShallowWrapper<PropsWithChildren<any>>;

  const fakeMessage = 'fake component';
  const FakeComponent = (): ReactElement => <Text>{fakeMessage}</Text>;

  beforeEach(() => {
    component = shallow(
      <LayoutView>
        <FakeComponent />
      </LayoutView>,
    );
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { children } = component.props().children.type().props;
    expect(children).toBe(fakeMessage);
  });
});
