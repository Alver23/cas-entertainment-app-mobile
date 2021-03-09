// Dependencies
import React, { ReactElement } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Divider } from 'react-native-elements';

// Components
import LoaderOrChildrenComponent from '@components/loader-or-children-component';

// Containers
import UserButtonActions from '@containers/user-button-actions';
import PhoneCall from '@containers/phone-call';
import GroupSection from '../group-section';
import RhythmSection from '../rhythm-section';
import ProfileSection from '../profile-section';

import { selectData, selectStatus } from '../../store/selectors';

import { reset } from '../../store';
import { fetchArtistById } from '../../store/actions';

const ArtistDetail = ({ id }: any): ReactElement => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const status = useSelector(selectStatus);

  const buttonCallback = React.useCallback(() => {
    console.log('onPress button');
  }, []);

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArtistById(id));
    }
  }, [status, id]);

  React.useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);

  const { firstName, lastName, active, cellPhone, skills, personId, groupIds } = data;
  const user = {
    active,
    firstName,
    id,
    lastName,
    personId,
  };

  return (
    <LoaderOrChildrenComponent loading={status === 'loading'}>
      <ScrollView showsVerticalScrollIndicator={false} indicatorStyle={'white'}>
        {status === 'succeeded' && !!data && (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <ProfileSection user={user} />
            <UserButtonActions onEdit={buttonCallback} onDelete={buttonCallback} />
            <Divider style={{ backgroundColor: 'white', width: '100%' }} />
            {cellPhone && <PhoneCall phoneNumber={cellPhone} />}
            <RhythmSection skills={skills} />
            {groupIds.length > 0 && <GroupSection groupIds={groupIds} />}
          </View>
        )}
      </ScrollView>
    </LoaderOrChildrenComponent>
  );
};

export default ArtistDetail;
