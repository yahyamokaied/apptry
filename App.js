import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import LeftDrawer from './navigation/LeftDrawer';

import Connection from './setting/Connection';

export default function App() {

  return (
    <View  style={styles.container}>
      <NavigationContainer>
      <LeftDrawer/>
      </NavigationContainer>
      <Connection/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  }
});
