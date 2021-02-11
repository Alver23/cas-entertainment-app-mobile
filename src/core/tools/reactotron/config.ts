// Dependencies
import AsyncStorage from '@react-native-community/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import Reactotron, { trackGlobalErrors, openInEditor, networking } from 'reactotron-react-native';

import { name } from '../../../../package.json';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name,
  })
  .use(
    reactotronRedux(),
    networking({
      ignoreContentTypes: /^(image)\/.*$/i,
      ignoreUrls: /\/(logs|symbolicate)$/,
    }),
    openInEditor(),
    trackGlobalErrors({
      veto: (frame) => frame.fileName.indexOf('/node_modules/react-native/') >= 0,
    }),
  )
  .useReactNative()
  .connect();

Reactotron.clear();

export default reactotron;
