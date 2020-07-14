import React from 'react';
import { StyleSheet, View, Text, useState } from 'react-native';
import Card from './src/Card';
import useAnimationView from './src/useAnimationView';
import * as AppStyle from './AppStyle';
import AppWidth from './AppWidth';
import useTextTyping from './src/useTextTyping';


export default function App() {

  const TextTyping = useTextTyping("How are you doing today my friend lovely boy so much I like your self? How are you doing today my friend lovely boy so much I like your self")

  //const StartButton = AppStyle.useAppButton("Start","pressed Start")
 // const GoButton = AppStyle.useAppButton("Go","pressed Go")
  //const ExitButton = AppStyle.useAppButton("Exit","pressed Exit")
  // const ExitText = AppStyle.useAppText("Exit")

  //const Animatedname1 = useAnimationView(StartButton,0,50,300,50)
  //const Animatedname2 = useAnimationView(GoButton,200,50,200,50)
  //const Animatedname3 = useAnimationView(ExitButton,300,50,0,50)


  return (
    <View style={styles.container}>
{TextTyping}
    </View>
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
