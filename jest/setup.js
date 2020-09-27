// Dependencies
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'react-native-gesture-handler/jestSetup';

import './app-mocks'

Enzyme.configure({ adapter: new Adapter() });
