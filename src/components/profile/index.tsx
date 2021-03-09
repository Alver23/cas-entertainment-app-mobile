// Depdencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Avatar, Text } from 'react-native-elements';

// Models
import { IProfileProps } from './models';

// Styles
import useStyles from './styles';

const Profile = ({ title, description, avatarProps }: IProfileProps): ReactElement => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Avatar containerStyle={styles.avatarContainer} size="large" rounded {...avatarProps} />
      <Text style={styles.title}>{title}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

export default Profile;
