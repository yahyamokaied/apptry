import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';


export default Connection = () => {
    const netInfo = useNetInfo();
    console.log(netInfo);
    
/*
var connTxt = [];

if(!netInfo.isInternetReachable) connTxt = ['red',"don't have"];
    if(netInfo.isInternetReachable) connTxt = ['green','have ( '+netInfo.type+' )'];

return (
    <View style={[styles.container,{backgroundColor:connTxt[0]}]}>
    <Text style={styles.txt}>*** You {connTxt[1]} internet connection ***</Text>
    </View>
)}; */


if(!netInfo.isInternetReachable) return (
    <View style={[styles.container,{backgroundColor:'red'}]}>
    <Text style={styles.txt}>*** You dont't have internet connection ***</Text>
    <ActivityIndicator animating={true} color="white" />
    </View>
    );

return null;


};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top:0,
        paddingTop:15,
        width: '100%',
        height: 65
    },
    txt:{
        color:'white',
        fontSize:16,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: 5
    }
});