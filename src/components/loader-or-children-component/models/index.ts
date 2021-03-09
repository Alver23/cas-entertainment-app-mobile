// Dependencies
import { ReactElement } from 'react';

// Models
import { ILoadingProps } from '@components/loading/models';

export interface ILoaderOrChildrenComponentProps {
  children: ReactElement;
  loading: boolean;
  loaderProps?: ILoadingProps['loadingProps'];
}
