// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';

// Commons
import { ROLES } from '@commons/app';

// Containers
import withRoleAllowed from '@containers/rbca';

// Core
import I18n from '@core/i18n';

// Models
import { IUserButtonActions } from './models';

// Components
import ButtonAction from './components/button-action';

// Styles
import useStyles from './styles';

const EditButton = withRoleAllowed(ButtonAction, Object.values(ROLES));
const DeleteButton = withRoleAllowed(ButtonAction, [ROLES.SUPER_ADMIN]);

const UserButtonActions = ({ onEdit, onDelete }: IUserButtonActions): ReactElement => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <EditButton
        buttonStyle={styles.editButton}
        title={I18n.t('commons.editLabel')}
        onPress={onEdit}
        iconConfig={{
          type: 'feather',
          name: 'edit',
        }}
      />
      <DeleteButton
        title={I18n.t('commons.deleteLabel')}
        buttonStyle={styles.deleteButton}
        onPress={onDelete}
        iconConfig={{
          type: 'material',
          name: 'close',
        }}
      />
    </View>
  );
};

export default UserButtonActions;
