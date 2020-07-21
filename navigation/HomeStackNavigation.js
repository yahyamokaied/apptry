import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';

const HomeStack = createStackNavigator();

export default HomeStackNavigation = ({navigation,route}) => {

    return (
    <HomeStack.Navigator mode="modal" screenOptions={{
/*       headerShown: false, */
        headerStyle: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 20,
                backgroundColor: 'white',
                height: 95,
                    },
        headerTintColor: '#fff',
        headerTitleStyle: {
                fontWeight: 'bold'
                    },

        headerTitle: () => (
          <TouchableOpacity onPress={() => { navigation.navigate('Hem') }}>
          <Image style={{ width: 110, height: 50}} source={require('../assets/yahya1.png')}/>
          </TouchableOpacity>      ) 
        ,
        headerLeft: () => (
            <Icon.Button name="ios-menu" style={{ paddingLeft: 14 }}backgroundColor='white' color='black' size={25} onPress={() => navigation.dangerouslyGetParent().openDrawer()}></Icon.Button>
        )
        ,
        headerRight: () => (
          <Icon.Button name="ios-cart" style={{ paddingLeft: 14 }}backgroundColor='white' color='black' size={25} onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }}>

        <HomeStack.Screen name="Home" component={HomeScreen}/>
        <HomeStack.Screen name="List" component={ListScreen}/>

    </HomeStack.Navigator>
    );
};