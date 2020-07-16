import React, { useEffect,useState } from 'react';
import {View,Text, Animated, PanResponder, StyleSheet, Dimensions,
        LayoutAnimation,UIManager} from 'react-native';

const {width} = Dimensions.get('window');

const MoveAndRotate = () => {
    var id = 0;
const position = new Animated.ValueXY();

const panResponder = PanResponder.create ({
onStartShouldSetPanResponder:() => true,
onPanResponderMove:(event, gesture) => {
 //console.log(gesture);
 position.setValue({x: gesture.dx, y: gesture.dy })
},
onPanResponderRelease: (event, gesture) => {
    const swipeTarget = width/4;
    if (gesture.dx > swipeTarget) 
    {
        console.log("Swiped Right");
        forceSwipe('Right');
    }
    else if (gesture.dx < -swipeTarget)
    {
        console.log("Swiped Left");
        forceSwipe('Left');
    }
    else
    {
        resetPosition();
    }
}
});

const [pan, setPan] = useState(panResponder);
const [pos, setSPos] = useState(position);
const [indId, setIndId] = useState(id);
console.log("index: "+ indId);


const getStyle = () => {
const rotate = pos.x.interpolate({
    inputRange: [-width, 0, width],
    outputRange: ['-120deg', '0deg', '120deg']
});
    return {
        ...pos.getLayout(),
        transform : [{ rotate }]
    };
}


const forceSwipe = (direction) => {
    const x = direction === 'Right' ? width : -width;
    Animated.timing(pos, {
        toValue: {x:x, y:0},
        duration: 250,
        useNativeDriver:false
    }).start(
        () => {
                // next card ()
            onSwipeCompleted(direction);
        }
    );
    }

    const onSwipeCompleted = (direction) => {
    id = direction === 'Right' ? id+1 : id-1;
    pos.setValue({x:0, y:0});
    setIndId(id);
    console.log("id: "+id);
    };

const resetPosition = () => {
Animated.spring(pos, {
    toValue: {x:0, y:0},
    useNativeDriver:false
}).start();
}

useEffect(() => {
    UIManager.setLayoutAnimationEnabledExperimental && 
    UIManager.setsetLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
    setPan(panResponder);
    setSPos(position);
    setIndId(id);
    getStyle();
  },[]);

    return (
        <Animated.View
        style = {getStyle ()}
        {...pan.panHandlers}>
            <View style = {styles.container}>
            <Text style = {styles.txt}>{indId}</Text>
            </View>
        </Animated.View>
    );
};

export default MoveAndRotate; 

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