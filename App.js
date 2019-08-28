import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import ViewUsersContainer from './containers/ViewUsersContainer'

// import UserAccessContainer from './containers/UserAccessContainer'

import Container from './containers/BundledContainer'


import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './redux/store'



export default function App() {
  return (

    <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                 <Container/>
            </PersistGate>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
