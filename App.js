import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//import HomeScreen from './screens/HomeScreen';
import MoveAndRotate from './src/MoveAndRotate';


export default function App() {

  return (
    <View  style={styles.container}>
      <MoveAndRotate />
{/* <HomeScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
