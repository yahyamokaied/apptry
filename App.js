import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ListScreen from './screens/ListScreen';

export default function App() {

  return (
    <View  style={styles.container}>
      <ListScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color:'red'
  }

});
