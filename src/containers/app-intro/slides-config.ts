// Core
import I18n from '@core/i18n';

// Assets
import oneImg from './assets/one.png';
import twoImg from './assets/two.png';
import threeImg from './assets/three.png';

const messages = I18n.t('appIntro.slides');
const { one: slideOne, two: slideTwo, three: slideThree } = messages;

const slidesConfig = [
  {
    key: 'one',
    title: slideOne.title,
    text: slideOne.description,
    image: oneImg,
  },
  {
    key: 'two',
    title: slideTwo.title,
    text: slideTwo.description,
    image: twoImg,
  },
  {
    key: 'three',
    title: slideThree.title,
    text: slideThree.description,
    image: threeImg,
  },
];

export default slidesConfig;
