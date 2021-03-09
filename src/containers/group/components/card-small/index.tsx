// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

// Components
import Tag from '@components/tag';
import Card from '@components/card';
import { STATUS_TYPES } from '@components/card/config';

// Models
import { ICardSmallProps } from './models';

// Styles
import useStyles from './styles';

const CardSmall = ({ title, description, state }: ICardSmallProps): ReactElement => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Card status={STATUS_TYPES.GREEN}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.titleContainer(state)}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.description}>({description})</Text>
          </View>
          {!!state && (
            <View>
              <Tag>
                <Text style={styles.stateTitle}>{state}</Text>
              </Tag>
            </View>
          )}
        </View>
      </Card>
    </View>
  );
};

export default CardSmall;
