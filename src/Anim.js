import React, { useEffect, useRef } from 'react';
import { Animated, Text} from 'react-native';

export default usePluse = () => {
    const position = useRef(new Animated.ValueXY(0,0)).current;

const pluse = () => {
  useEffect(() => {
    Animated.spring(position, {toValue: { x:200, y:400},useNativeDriver: false}).start(() => pluse());
  }, []);
}

return position;

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