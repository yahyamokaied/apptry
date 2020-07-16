import React, { useEffect,useState } from 'react';
import {View,Text, Animated, PanResponder, StyleSheet} from 'react-native';

const MoveView = () => {

const position = new Animated.ValueXY();


const panResp = PanResponder.create ({
onStartShouldSetPanResponder:() => true,
onPanResponderMove:(event, gesture) => {
 //console.log(gesture);
 position.setValue({x: gesture.dx, y: gesture.dy })
},
onPanResponderRelease: () => {}
});

const [pan, setPan] = useState(panResp)
const [pos, setSPos] = useState(position)


useEffect(() => {
    setPan(panResp);
    setSPos(position);
  });

    return (
        <Animated.View
        style = {pos.getLayout()}
        {...pan.panHandlers}>
            <View style = {styles.container}>
            <Text style = {styles.txt}>Yahya</Text>
            </View>
        </Animated.View>
    );
};

export default MoveView; 


const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        color: 'white'
      }
  
  });