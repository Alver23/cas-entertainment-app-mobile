// Dependencies
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import './app-mocks'
import './react-navigation'

Enzyme.configure({ adapter: new Adapter() });
