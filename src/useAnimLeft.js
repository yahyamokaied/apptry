import React, { useEffect } from 'react';
import { Image, Animated, Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window');

const useAnimLeft = () => {

  const position = new Animated.ValueXY({ x:width, y:0 });

    useEffect(() => {
        Animated.spring(position, {toValue: { x:0, y:0},useNativeDriver: false, speed: 1}).start();
      }, []);

    return (
    <Animated.View style={position.getLayout()}>
    <Image 
    source={require('../assets/yahya1.png')}
    style={{width:150, height: 400 , resizeMode: 'stretch',
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,}}
    />
   </Animated.View>
      );
};

const styles = {
name: {
fontSize : 20,
color: 'red'
    }
};


export default useAnimLeft;