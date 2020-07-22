import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import * as Yup from 'yup';

import AppForm from '../components/AppForm';
import FormField from '../components/FormField';
import FormSubmitButton from '../components/FormSubmitButton';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

export default LogInScreen = () => {

    return (
<View style={styles.container}>
<Image style={styles.logo} source={require("../assets/yahya1.png")}/>

<AppForm
initialValues={{ email: '', password:'' }}
onSubmit={ (values) => console.log(values) }
validationSchema={validationSchema}
>
<FormField
    name="email"
    autoCaitalize ="none"
    autoCorrect={false}
    icon="email"
    keyboardType="email-address"
    placeholder="Email:"
    /* textContentType to get email from iphone keychain */
    textContentType="emailAddress"
    />

<FormField
    name="password"
    autoCaitalize ="none"
    autoCorrect={false}
    icon="lock"
    keyboardType="email-address"
    placeholder="Password:"
    secureTextEntry
    /* textContentType to get password from iphone keychain */
    textContentType="password"
    />

<FormSubmitButton title="Login" />

</AppForm>
</View>
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