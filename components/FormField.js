import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import {useFormikContext} from 'formik';

export default FormField = ({name, ...otherProps}) => {

const { setFieldTouched, handleChange, errors, touched} = useFormikContext();
    
return (
        <>

        <TextInput style={styles.txtInput}
                /* placeholderTextColor={'red'} */
                onChangeText={ handleChange(name) }
                onBlur={() => setFieldTouched(name) }
                {...otherProps}
/*
autoCaitalize ="none"
autoCorrect={false}
icon="email"
keyboardType="email-address"
placeholder="Email:"
textContentType to get email from iphone keychain
textContentType="emailAddress"
multiline
numberOfLines={3}
maxLength={8}
onChangeText={ handleChange(name) }
onBlur={() => setFieldTouched(name) }
{...otherProps}

 */        
        />
    {touched[name] && <Text  style={styles.err} >{errors[name]}</Text>}
    
    </>
    );
};

const styles = StyleSheet.create ({
    container : {
        flex: 1,
backgroundColor: 'green',
padding: 10
    },
    logo:{
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    txtInput:{
        borderWidth:1,
        borderColor: 'black',
        height:60,
        padding: 10,
        color: 'green',
        fontSize: 16,
        backgroundColor: 'white',
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        margin:5
    },
    err:{
        color: 'red',
        textAlign: 'center',
        fontSize:20,
        fontWeight: 'bold'
    }
    
})