// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';

// Components
import LoaderOrChildrenComponent from '@components/loader-or-children-component';

// I18n
import I18n from '@core/i18n';

// Config
import { COMPONENT_MAPPER, COMPONENT_TYPES } from './config';

// Hooks
import { useGroupList } from './hooks';

// Models
import { IGroupListProps } from './models';

// Styles
import useStyles from './styles';

const GroupList = ({ groupIds, type = COMPONENT_TYPES.SMALL }: IGroupListProps): ReactElement => {
  const ComponentToRender = COMPONENT_MAPPER[type];
  const [items, loading] = useGroupList(groupIds);
  const styles = useStyles();

  return (
    <LoaderOrChildrenComponent loading={loading}>
      <View style={styles.container}>
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <ComponentToRender
              title={item.name}
              description={I18n.t('group.countMember', { count: item.membersNumber })}
              state={I18n.t('group.state', { count: +item.state })}
            />
          </React.Fragment>
        ))}
      </View>
    </LoaderOrChildrenComponent>
  );
};

export default GroupList;
