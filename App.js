/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/screens/home/index'
import {
  ScrollView,
  StatusBar,
} from 'react-native';

const App = () => {

  return (
    <>
      <StatusBar />
      <ScrollView>
        <Home />
      </ScrollView>
    </>
  );
};

export default App;
