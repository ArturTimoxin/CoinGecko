import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider } from 'react-redux';
import Navigation from './navigation';

import store from './core/store';
import { SafeAreaView } from 'react-native';
import styles from './styles';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={styles.topSafeArea} />
        <Navigation />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
