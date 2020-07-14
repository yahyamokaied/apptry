import React from 'react';
import { StyleSheet, View, Text, useState } from 'react-native';

import Card from './src/Card';
import useAnimationView from './src/useAnimationView';
import * as AppStyle from './AppStyle';
import AppWidth from './AppWidth';
import useTextTyping from './src/useTextTyping';
import useColorMaskedText from './src/useColorMaskedText';
import useGradientMaskedText from './src/useGradientMaskedText';





export default function App() {

  const hh = useColorMaskedText("YAHYA MOKAIED", 44);
  const gg = useGradientMaskedText("YAHYA MOKAIED", 44,'#00ff00','#0000ff');

  const TextTyping = useTextTyping("Yahya Mokaied",500,1000);

  //const StartButton = AppStyle.useAppButton("Start","pressed Start")
 // const GoButton = AppStyle.useAppButton("Go","pressed Go")
  //const ExitButton = AppStyle.useAppButton("Exit","pressed Exit")
  // const ExitText = AppStyle.useAppText("Exit")

  //const Animatedname1 = useAnimationView(StartButton,0,50,300,50)
  //const Animatedname2 = useAnimationView(GoButton,200,50,200,50)
  //const Animatedname3 = useAnimationView(ExitButton,300,50,0,50)


  return (
    <View style={styles.container}>
{gg}{gg}{gg}
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
