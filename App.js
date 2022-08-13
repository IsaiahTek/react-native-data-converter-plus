/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import ConverterHome from './src/ConverterHome';
const App = () => {

    return (
        <SafeAreaView>
          <StatusBar transparent={true} backgroundColor="#51067E" />
          <ConverterHome />
        </SafeAreaView>
    );
};

export default App;
