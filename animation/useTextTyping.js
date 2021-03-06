import React, { useEffect } from 'react';
import { View, Animated} from 'react-native';



const useTextTyping = (stringText,showTime,hideTime,txtColor) => {
    var animatedValues = [];
    var res = stringText.split(" ");
    res.forEach((_,i) => {
        animatedValues[i] = new Animated.Value(0);
    })

const animated = (toValue = 1) => {
    const animations = res.map((_,i) => {
    return Animated.timing(animatedValues[i], {
        toValue,
        duration: showTime,
        useNativeDriver: true
       });
        });

Animated.stagger(
    200,
    toValue === 0 ? animations.reverse() : animations
    ).start( () => {
    setTimeout(() => animated(toValue === 0 ? 1 : 0), hideTime);
});
};


    useEffect(() => {
        animated();
      }, []);

    return (
        <View style={styles.textView} >
              {res.map((word, index) => {
              return (<Animated.Text
                key={`${word}-${index}`}
                /* `${word}-${index}` */
                style={[styles.name,
                {color: txtColor, opacity: animatedValues[index],
                transform: [
                    {
                        translateX: Animated.multiply(
                            animatedValues[index],
                            new Animated.Value(-10)
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
    }
};


export default useTextTyping;