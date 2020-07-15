import React from 'react';
import { StyleSheet, View, Text, useState } from 'react-native';

import Card from './src/Card';
import useAnimationView from './src/useAnimationView';
import * as AppStyle from './AppStyle';
import useTextTyping from './src/useTextTyping';
import useColorMaskedText from './src/useColorMaskedText';
import useGradientMaskedText from './src/useGradientMaskedText';
import useAnimLeft from './src/useAnimLeft';
import useAnimRight from './src/useAnimRight';
import useTextAnimUp from './src/useTextAnimUp';




export default function App() {

  //const hh = useColorMaskedText("YAHYA MOKAIED", 44);
  //const gg = useGradientMaskedText("YAHYA MOKAIED", 44,'#00ff00','#0000ff');
  //const TextTyping = useTextTyping("Yahya Mokaied",500,1000);
  //const StartButton = AppStyle.useAppButton("Start","pressed Start")
 // const GoButton = AppStyle.useAppButton("Go","pressed Go")
  //const ExitButton = AppStyle.useAppButton("Exit","pressed Exit")
  // const ExitText = AppStyle.useAppText("Exit")
  //const Animatedname1 = useAnimationView(StartButton,0,50,300,50)
  //const Animatedname2 = useAnimationView(GoButton,200,50,200,50)
  //const Animatedname3 = useAnimationView(ExitButton,300,50,0,50)
  const yahya1 = useAnimLeft();
  const yahya2 = useAnimRight();
  const yahya3 = useTextAnimUp("YAHYA MOKAIED",30,330);
  const yahya4 = useTextAnimUp("Mobile Applications Developer",14,332);
  const yahya5 = useTextTyping("2019 - 2021 Applications Developer IT-Högskolan (Göteborg-Sweden) ",400,2000,'gray');
  const yahya6 = useTextTyping(" ITtttttttttttt",400,2000,'red');


  return (
    <View   style={styles.main}>
          <View  style={styles.container}>
          {yahya1}
          {yahya2}
          </View>
          <View> 
          {yahya3}
          {yahya4}
          </View>
          <View  style={styles.description}>
          {yahya5}
          {yahya5}
          </View>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flexDirection: 'column',

    //alignItems: 'center',
    //justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'center',

  },
  description : {
    marginTop: 380,
  },

});
