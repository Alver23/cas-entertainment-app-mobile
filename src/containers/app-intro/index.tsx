// Dependencies
import React, { ReactElement } from 'react';
import { Button } from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';

// Core
import I18n from '@core/i18n';

// Components
import Item from './components/item';

// slides config
import slidesConfig from './slides-config';

// Styles
import useStyles from './styles';

const messages = I18n.t('appIntro');

const AppIntro = (): ReactElement => {
  const styles = useStyles();
  const slider = React.useRef(null);
  const [index, setIndex] = React.useState(1);

  const onSlideChange = React.useCallback((value) => setIndex(value + 1), []);
  const nextSlide = React.useCallback(() => {
    return slider.current.goToSlide(index, true);
  }, [index]);

  return (
    <AppIntroSlider
      ref={slider}
      renderItem={({ item }): ReactElement => <Item item={item} />}
      data={slidesConfig}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      bottomButton
      showSkipButton
      skipLabel={messages.skipLabel}
      renderNextButton={(): ReactElement => <Button title={messages.nextLabel} onPress={nextSlide} />}
      onSlideChange={onSlideChange}
      renderDoneButton={(): ReactElement => <Button title={messages.doneLabel} />}
    />
  );
};

export default AppIntro;
