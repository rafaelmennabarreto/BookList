import React from 'react';
import {SafeAreaView} from 'react-native';

import Routes from './routes';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes />
    </SafeAreaView>
  );
}
