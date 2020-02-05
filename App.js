/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CocktailFinderNavigator from './src/navigation/CocktailFinderNavigator';
import { createStore, combineReducers } from 'redux';
import cocktailsReducer from './src/store/reducers/cocktails';
import { Provider } from 'react-redux';
const rootReducer = combineReducers({
  cocktails: cocktailsReducer
});

const store = createStore(rootReducer);

export default function App(){
  return <Provider store={store}><CocktailFinderNavigator /></Provider>;
};
