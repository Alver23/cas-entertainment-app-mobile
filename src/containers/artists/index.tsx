// Dependencies
import React, { ReactElement } from 'react';
import { View } from 'react-native';

// Containers
import { ArtistSearch } from '@containers/artists/containers/search';
import ArtistList from '@containers/artists/containers/list';

// Contexts
import { ParamListContext } from '@contexts/params';

// Hooks
import { useInitializeParamList } from '@hooks/params';

export const ArtistContainer = ({ navigateToArtistDetail }: any): ReactElement => {
  const providerData = useInitializeParamList();

  return (
    <View style={{ flex: 1 }}>
      <ParamListContext.Provider value={providerData}>
        <ArtistSearch />
        <ArtistList navigateToArtistDetail={navigateToArtistDetail} />
      </ParamListContext.Provider>
    </View>
  );
};
