import React, { useEffect } from 'react';
import { Image, Animated, Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window');

const useAnimRight = () => {

  const position = new Animated.ValueXY({ x:0 - width, y:0 });

    useEffect(() => {
        Animated.spring(position, {toValue: { x:0, y:0 },useNativeDriver: false, speed: 1}).start();
      
      }, []);
    return (
    <Animated.View style={position.getLayout()}>
    <Image 
    source={require('../assets/yahya2.png')}
    style={{width:150, height: 400 , resizeMode: 'stretch',
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: "hidden",}}
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


export default useAnimRight;