import React, { useState ,useEffect } from 'react';
import { View , Text, Animated} from 'react-native';

export default useAnimation = (name,initX,initY,newX,newY) => {
    var position = new Animated.ValueXY({ x: initX, y: initY });

    useEffect(() => {
        Animated.spring(position, {toValue: { x:newX, y:newY},useNativeDriver: false}).start();
      }, []);

    const request = () => {
        setData(position.getLayout());
    };

    return (
        <Animated.View style={position.getLayout()}>
        <Text style={styles.name}>{name}</Text>
      </Animated.View>
      );
};

const styles = {
name: {
fontSize : 20,
color: 'red'
    }
};