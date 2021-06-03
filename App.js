/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/screens/Home/index'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {

  return (
    <View style={styles.appContainer}>
      <StatusBar />
      <ScrollView>
        <Home />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    
  },
});

export default App;
