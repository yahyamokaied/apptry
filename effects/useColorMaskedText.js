import React from 'react';
import MaskedView from '@react-native-community/masked-view';
import { View, Text} from 'react-native';


const useColorMaskedText = (txt,txtSize) => {

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
            fontWeight: 'bold'
          }}
        >
          {txt}
        </Text>
      </View>
    }
  >
    {/* Shows behind the mask, you can put anything here, such as an image */}
    <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
    <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
    <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
    <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />
  </MaskedView>
);

};

export default useColorMaskedText;