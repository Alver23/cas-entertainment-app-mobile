// Dependencies
import React, { ReactElement } from 'react';
import { Icon, Text } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';

// Components
import Tag from '@components/tag';

// Models
import { IRhythmProps } from './models';

// Styles
import useStyles from './styles';

const Rhythm = ({ skills }: IRhythmProps): ReactElement => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      {skills.map(({ id, description }) => (
        <Tag key={id.toString()} style={styles.tagContainer}>
          <Text style={styles.description}>{description}</Text>
          <Icon
            type={'antdesign'}
            name={'closecircle'}
            size={16}
            containerStyle={styles.iconContainer}
            onPress={() => console.log('delete')}
            Component={TouchableOpacity}
          />
        </Tag>
      ))}
    </View>
  );
};

export default Rhythm;
