import React, { useEffect, useState } from 'react';
import { View , Animated, Text} from 'react-native';

export default Anim = () => {
    var position = new Animated.ValueXY(0,0);

    useEffect(() => {
        Animated.spring(position, {
          toValue: { x:200, y:400},
          useNativeDriver: false
        }).start();
      }, []);

return (
    <Animated.View style={position.getLayout()}>
      <Text style={styles.name}>gd</Text>
    </Animated.View>
  );

}

const styles = {
    ball: {
        height : 60,
        width: 60,
        borderRadius:30,
        borderWidth:30,
        borderColor : 'black'
    },
    name: {
      color: 'red',
fontSize:20
    }
};