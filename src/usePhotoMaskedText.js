import React from 'react';
import MaskedView from '@react-native-community/masked-view';
import { View, Text, Image, requireNativeComponent} from 'react-native';


const usePhotoMaskedText = (txt, txtSize, imgUrl) => {

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
    <Image 
    source={{uri: imgUrl}}
    style={{width:'100%', height: '100%' , resizeMode: 'contain'}}
    />

  </MaskedView>
);

};

export default usePhotoMaskedText;