import React from 'react'
import { Router } from './router/Router';
import { StatusBar, SafeAreaView } from 'react-native';
import { HomeIndicator } from 'react-native-home-indicator';

import { Provider } from 'react-redux';
import { createStore } from './store'
const store = createStore()

export default function App() {
  return (
    <Provider store ={store}>
      <HomeIndicator autoHidden />
      <StatusBar hidden={true} />
      <Router />
    </Provider>
  );
}
