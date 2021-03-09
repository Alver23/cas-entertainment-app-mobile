// Dependencies
import React, { ReactElement } from 'react';
import { useRoute } from '@react-navigation/native';

// Components
import { LayoutView } from '@components/layout';

import ArtistDetailContainer from '@containers/artists/containers/detail';

const ArtistDetail = (): ReactElement => {
  const route = useRoute();
  const { id } = route.params as any;
  return (
    <LayoutView style={{ flex: 1, paddingHorizontal: 16 }}>
      <ArtistDetailContainer id={id} />
    </LayoutView>
  );
};

export default ArtistDetail;
