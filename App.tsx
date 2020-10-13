import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RecoilRoot } from 'recoil';

import Count from './components/Count';

export default function App() {
  return (
    <RecoilRoot>
      <View style={styles.container}>
        <Text>Sample Recoil</Text>
        <Count />
        <StatusBar style="auto" />
      </View>
    </RecoilRoot>
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
