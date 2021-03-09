// Dependencies
import React, { ReactElement } from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

// Models
import { ICard } from './models';

// Styles
import { styles } from './styles';

const CardBackground = ({ backgroundImage, onPress, text }: ICard): ReactElement => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.imageContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CardBackground;
