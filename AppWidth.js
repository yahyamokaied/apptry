import { useEffect, useState } from 'react';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const AppWidth = () => {
    const [realWidth, setRealWidth] = useState(width);

     useEffect(() => {
       Dimensions.addEventListener('change', ({window}) => {
           setRealWidth(window.width);
       });
       return () => {
         Dimensions.removeEventListener('change');
       };
     });

return realWidth;
    };

    export default AppWidth;