import React, { useEffect } from 'react';
import { Text, Animated, Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window');

const useTextAnimUp = (txt,txtSize,txtHight) => {

  const position = new Animated.ValueXY({ x:0, y:height });

    useEffect(() => {
        Animated.spring(position, {toValue: { x:0, y:txtHight},useNativeDriver: false, speed:0.1}).start();
      }, []);

    return (
    <Animated.View style={position.getLayout()}>
    <Text style={[styles.name,{fontSize : txtSize, alignSelf: 'center',}]}>{txt}</Text>
   </Animated.View>
      );
};

const styles = {
name: {

color: 'white'
    }
};


export default useTextAnimUp;