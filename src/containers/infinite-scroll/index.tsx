// Dependencies
import React, { ReactElement } from 'react';
import { View, RefreshControl } from 'react-native';
import { RecyclerListView } from 'recyclerlistview';

// Components
import Footer from './components/footer';
import Header from './components/header';

// Utils
import LayoutUtil from './utils/layout-provider';

// Styles
import useStyles from './styles';
import { useInfiniteScroll } from './hooks';

export interface IInfiniteScrollProps {
  fetcher: (params) => Promise<any>;
  renderItem: (item: any, index: number) => ReactElement;
  title: string;
}

export const InfiniteScroll = ({ fetcher, renderItem, title }: IInfiniteScrollProps): ReactElement => {
  const styles = useStyles();
  const [state, initialFetch, handleLoadMore] = useInfiniteScroll(fetcher as any);

  const { loading, refreshing, totalItems, initLoading, dataProvider } = state;
  const { current: layoutProvider } = React.useRef(LayoutUtil.getLayoutProvider());

  return (
    <View style={{ flex: 1 }}>
      <Header title={title} totalItems={totalItems} initialLoading={initLoading} />
      {dataProvider.getAllData().length > 0 && (
        <RecyclerListView
          onEndReached={handleLoadMore}
          dataProvider={dataProvider}
          layoutProvider={layoutProvider}
          rowRenderer={(type, data, index) => renderItem(data, index)}
          scrollViewProps={{
            refreshControl: <RefreshControl tintColor={styles.loading.color} refreshing={refreshing} onRefresh={initialFetch} />,
            indicatorStyle: 'white',
          }}
          renderFooter={() => <Footer isLoading={loading} />}
        />
      )}
    </View>
  );
};

export default InfiniteScroll;
