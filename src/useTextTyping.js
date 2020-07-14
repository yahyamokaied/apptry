import React, { useEffect } from 'react';
import { View, Animated} from 'react-native';



const useTextTyping = (arr) => {
    var animatedValues = [];
    var res = arr.split(" ");
    res.forEach((_,i) => {
        animatedValues[i] = new Animated.Value(0);
    })

const animated = (toValue = 1) => {
    const animations = res.map((_,i) => {
    return Animated.timing(animatedValues[i], {
        toValue,
        duration: 500,
        useNativeDriver: true
       });
        });

Animated.stagger(
    100,
    toValue === 0 ? animations.reverse() : animations
    ).start( () => {
    setTimeout(() => animated(toValue === 0 ? 1 : 0), 1000);
});
};

  //const position = new Animated.ValueXY({ x: initX, y: initY });

    useEffect(() => {
        animated();
      }, []);

    return (
        <View style={styles.textView} >
              {res.map((word, index) => {
              return (<Animated.Text
                key={`${word}-${index}`}
                style={[styles.name,
                {opacity: animatedValues[index],
                transform: [
                    {
                        translateX: Animated.multiply(
                            animatedValues[index],
                            new Animated.Value(-5)
                        )
                    }
                ]
                }
            ]}
              >
                  {word}
                  {`${index < res.length ? ' ' : ''}`}
                  </Animated.Text>
              );
          })}
      </View>
      );
};

const styles = {
    textView: {
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent: 'center',
    },
name: {
fontSize : 20,
color: 'red'
    }
};


export default useTextTyping;