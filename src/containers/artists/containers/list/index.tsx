// Dependencies
import React, { ReactElement } from 'react';

// Containers
import InfiniteScroll from '@containers/infinite-scroll';

// Services
import { artistService } from '@services/artist';

import Item from '../../components/item';

export const ArtistList = ({ navigateToArtistDetail }: any): ReactElement => {
  const fetcher = (params) => {
    return artistService.get(params);
  };

  return <InfiniteScroll title="Artistas" fetcher={fetcher} renderItem={(item) => <Item item={item} onPress={navigateToArtistDetail} />} />;
};

export default React.memo(ArtistList);
