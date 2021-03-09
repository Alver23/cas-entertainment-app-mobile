// Dependencies
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

// Components
import Switch from '@components/switch';
import Profile from '@components/profile';

// Commons
import { getStateOptions, findIndexFromByValue } from '@commons/app';

// Models
import { IProfileSectionProps } from './models';

// Redux
import { artistUpdate } from '../../store/actions';

const ProfileSection = ({ user }: IProfileSectionProps): ReactElement => {
  const dispatch = useDispatch();
  const options = getStateOptions();
  const { firstName, lastName, active, id, personId } = user;

  const onUpdate = React.useCallback(
    (value) => {
      dispatch(artistUpdate({ id, personId, active: value }));
    },
    [id, personId],
  );

  return (
    <>
      <Profile
        avatarProps={{
          title: `${firstName[0]}${lastName[0]}`,
        }}
        title={`${firstName} ${lastName}`}
      />
      <Switch options={options} onPress={onUpdate} initialOption={findIndexFromByValue(+active)} />
    </>
  );
};

export default ProfileSection;
