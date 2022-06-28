import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import Main from './src/Main';
import store from './src/store/redux';
import RNBootSplash from 'react-native-bootsplash';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Main />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
