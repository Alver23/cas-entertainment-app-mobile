// Dependencies
import React, { ReactElement } from 'react';

// Components
import Loading from '../loading';

// Models
import { ILoaderOrChildrenComponentProps } from './models';

const LoaderOrChildrenComponent = ({ loading, children, loaderProps }: ILoaderOrChildrenComponentProps): ReactElement => {
  return <>{loading ? <Loading {...loaderProps} /> : children}</>;
};

export default LoaderOrChildrenComponent;
