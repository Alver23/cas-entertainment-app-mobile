// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';

// Core
import I18n from '@core/i18n';

// Models
import { ISearchBarProps } from './models';

// Styles
import useStyles from './styles';

const Search = ({ onPress, placeholder, buttonTitle }: ISearchBarProps): ReactElement => {
  const styles = useStyles();
  const [text, setText] = React.useState<string>();

  const onChangeText = (value: string): void => {
    setText(value);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        showCancel={true}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={text}
        searchIcon={{ iconStyle: styles.searchIcon, size: 28 }}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
      />
      <Button title={buttonTitle} containerStyle={styles.buttoncontainer} onPress={() => onPress(text)} />
    </View>
  );
};

Search.defaultProps = {
  placeholder: I18n.t('commons.searchPlaceholder'),
  buttonTitle: I18n.t('commons.searchButtonTitle'),
};

export default Search;
