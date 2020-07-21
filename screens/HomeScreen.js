import React from 'react';
import { StyleSheet, View } from 'react-native';

import { scale, w, h, realWidth, realHeight} from '../AppDimentions';

import useTextTyping from '../animation/useTextTyping';
import useAnimLeft from '../animation/useAnimLeft';
import useAnimRight from '../animation/useAnimRight';
import useTextAnimUp from '../animation/useTextAnimUp';

const HomeScreen = () => {

    const photoLeft = useAnimLeft();
    const photoRight = useAnimRight();
    const name = useTextAnimUp("YAHYA MOKAIED",30,330);
    const title = useTextAnimUp("Mobile Applications Developer",14,332);
    const description = useTextTyping("2019 - 2021 Applications Developer IT-Högskolan (Göteborg-Sweden) ",400,2000,'gray');
  
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