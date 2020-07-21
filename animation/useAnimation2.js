import React, { useEffect } from 'react';
import { Text, Animated} from 'react-native';

const useAnimation2 = (name, initValue, newValue1, newValue2) => {

    const scale = new Animated.Value(initValue);
    useEffect(() => {
    setTimeout(() => request(),500);
      }, []);

    const request = () => {
        Animated.sequence([
            Animated.timing(scale, {toValue: newValue1 ,useNativeDriver: false}),
            Animated.timing(scale, {toValue: newValue2 ,useNativeDriver: false}),
            
        ]).start(() => request());
    };

    return (
        <Animated.View style={{width:150, height:50, backgroundColor:'red',
        alignItems: 'center',justifyContent: 'center',alignSelf: 'center', transform:[{scale}]}}>
          <Text style={styles.name}>{name}</Text>
      </Animated.View>
      );
};

const styles = {
name: {
fontSize : 20,
fontWeight: 'bold',
color: 'white',
textAlign:'center',
    }
};

export default useAnimation2;