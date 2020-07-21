import React, {useEffect} from 'react';
import { StyleSheet, View,TouchableOpacity,Text } from 'react-native';

import { scale, w, h, realWidth, realHeight} from '../AppDimentions';

import useTextTyping from '../animation/useTextTyping';
import useAnimLeft from '../animation/useAnimLeft';
import useAnimRight from '../animation/useAnimRight';
import useTextAnimUp from '../animation/useTextAnimUp';

import {useSelector, useDispatch} from 'react-redux';
import {resetAction, addAction, removeAction} from '../redux/actions';



const HomeScreen = () => {

  const dispatch = useDispatch();
  const allMeals = useSelector((state) => state.meals);
  console.log("inittttttt :"+ allMeals );

    const photoLeft = useAnimLeft();
    const photoRight = useAnimRight();
    const name = useTextAnimUp("YAHYA MOKAIED",30,330);
    const title = useTextAnimUp("Mobile Applications Developer",14,332);
    const description = useTextTyping("2019 - 2021 Applications Developer IT-Högskolan (Göteborg-Sweden) ",400,2000,'gray');


  useEffect(() => {
    console.log("You clicked :"+allMeals)
  }, [allMeals]);


    return (
        <View  style={styles.container}>
       <View  style={styles.main}>
              {photoLeft}
              {photoRight}
          </View>
          <View  style={styles.main2}>
              {name}
              {title}
          </View>
          <View  style={styles.main3}>
              {description}
              </View>
        <TouchableOpacity onPress={() => {dispatch(addAction('hi'))}}>
        <Text style={styles.title}>Add Meal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {dispatch(removeAction(4))}}>
        <Text style={styles.title}>Remove Meal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {dispatch(resetAction())}}>
        <Text style={styles.title}>Reset</Text>
        </TouchableOpacity>

              </View>
      );

};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      width:realWidth,
      height:realHeight,
    },
    main: {
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf : 'center',
      marginTop: scale(50)
    },
    main2: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf : 'center',
      marginTop: scale(50)
    },
    main3: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf : 'center',
        marginTop: scale(465)
    }

});

export default HomeScreen;