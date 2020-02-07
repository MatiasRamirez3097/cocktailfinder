/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
//import {View, Text} from 'react-native';
import CocktailFinderNavigator from './src/navigation/CocktailFinderNavigator';
//import {configureStore} from 'redux';
import {Provider} from 'react-redux';
import store from './src/store/configStore';

export default function App() {
  return (
    <Provider store={store}>
      <CocktailFinderNavigator />
    </Provider>
  );
}
