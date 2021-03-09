// Dependencies
import call from 'react-native-phone-call';
import React, { ReactElement } from 'react';
import { Button } from 'react-native-elements';

// Core
import I18n from '@core/i18n';

// Models
import { IPhoneCallProps } from './models';

// Styles
import useStyles from './styles';

const PhoneCall = ({ phoneNumber, buttonProps }: IPhoneCallProps): ReactElement => {
  const styles = useStyles();

  const makeCall = React.useCallback(async () => {
    const args = {
      number: phoneNumber,
    };
    call(args);
  }, [phoneNumber]);

  return (
    <>
      <Button
        onPress={makeCall}
        title={I18n.t('phoneCall.buttonTitle')}
        containerStyle={styles.container}
        titleStyle={styles.title}
        buttonStyle={styles.buttonContainer}
        icon={{
          name: 'phone',
          type: 'feather',
          size: 20,
        }}
        {...buttonProps}
      />
    </>
  );
};

export default PhoneCall;
