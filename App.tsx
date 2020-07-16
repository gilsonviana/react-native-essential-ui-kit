import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native'

import Navigator from './src/navigators'

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigator />
    </SafeAreaView>
  );
}