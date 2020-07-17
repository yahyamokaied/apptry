import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//import HomeScreen from './screens/HomeScreen';
import MoveAndRotate from './src/MoveAndRotate';
import FetchMyGit from './src/FetchMyGit';


export default function App() {

  return (
    <View  style={styles.container}>
      <FetchMyGit />
{/* <MoveAndRotate /> */}
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
