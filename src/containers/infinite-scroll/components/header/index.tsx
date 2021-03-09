// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

// Components
import Loading from '@components/loading';

// Models
import { IHeaderProps } from './models';

// Styles
import useStyles from './styles';

const Header = ({ initialLoading, totalItems, title }: IHeaderProps): ReactElement => {
  const styles = useStyles();
  return (
    <>
      <View style={styles.container}>
        <Text>
          {totalItems} {title}
        </Text>
      </View>
      {initialLoading && <Loading containerStyle={styles.loading} />}
    </>
  );
};

export default Header;
