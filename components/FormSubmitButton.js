import React from 'react';
import { Button } from 'react-native';
import {useFormikContext} from 'formik';

export default FormSubmitButton = ({ title }) => {

const { handleSubmit } = useFormikContext();
    
return (
    <Button title={title} onPress={() => { handleSubmit } } />
    );
};
