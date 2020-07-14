import React, { useEffect, useState } from 'react';
import { Text , TouchableOpacity, StyleSheet, View, Dimensions} from 'react-native';
import AppWidth from './AppWidth';

const {width,height} = Dimensions.get('window');


export const useAppButton = (BtnText, BtnOnPress) => {

return (
    <TouchableOpacity style={styles.button} onPress={() => {console.log("hi")}}>
    <Text style={styles.btntext}>{BtnText}</Text>
    </TouchableOpacity>
  );
}

export const useAppText = (appText) => {

    return (
        <View style={styles.container}>
        <Text style={styles.apptext}>{appText}</Text>
        </View>
      );
      
    }

const styles = StyleSheet.create({
    button:{
        justifyContent: 'center',
        height : 40,
        width: 150,
        backgroundColor: 'red',
        borderRadius:6,
    },
    btntext: {
        color:'white',
        fontSize:22,
        textAlign:'center'
    },
    container: {
        justifyContent: 'center'
    },
    apptext: {
        color:'red',
        fontSize:22,
        textAlign:'center'
    }
});