import React, { useEffect } from 'react';
import {Animated} from 'react-native';

/*
import useAnimationView from './src/useAnimationView';
//       name            func name      
const Animatedname = useAnimationView(ExitButton,0,0,100,100)
{Animatedname}
*/

const useAnimationView = (name,initX,initY,newX,newY) => {

  const position = new Animated.ValueXY({ x: initX, y: initY });

    useEffect(() => {
        Animated.spring(position, {toValue: { x:newX, y:newY},useNativeDriver: false}).start();
      }, []);

    const request = () => {
        setData(position.getLayout());
    };

    return (
        <Animated.View style={position.getLayout()}>
          {name}
      </Animated.View>
      );
};

const styles = {
name: {
fontSize : 20,
color: 'red'
    }
};


export default useAnimationView;