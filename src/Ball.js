import React, { useEffect } from 'react';
import { View , Animated} from 'react-native';

export default function Ball() {
    var position = new Animated.ValueXY(0,0);

    useEffect(() => {
        Animated.spring(position, {
          toValue: { x:200, y:500},
          useNativeDriver: false
        }).start();
      }, []);

return (
    <Animated.View style={position.getLayout()}>
    <View style={styles.ball}/>
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
    }
};