import React from 'react';
import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text} from 'react-native';


const useGradientMaskedText = (txt,txtSize,fColor,sColor) => {

    return (
    <MaskedView
    style={{ flex: 1, flexDirection: 'row', height: '100%' }}
    maskElement={
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            fontSize: txtSize,
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          {txt}
        </Text>
      </View>
    }
  >
    {/* Shows behind the mask, you can put anything here, such as an image */}
    <LinearGradient colors={[fColor, sColor]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={{flex: 1}}>        
      </LinearGradient>
      </MaskedView>
);

};

export default useGradientMaskedText;