import { useEffect, useState } from 'react';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const AppHeight = () => {
  const [realHeight, setRealHeight] = useState(height);

     useEffect(() => {
       Dimensions.addEventListener('change', ({window}) => {
        setRealHeight(window.height);
      });
       return () => {
         Dimensions.removeEventListener('change');
       };
     });

return realHeight;
    };

    export default AppHeight;