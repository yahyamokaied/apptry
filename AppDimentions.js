import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const realWidth = width;
const realHeight = height;
const scale = size => width / width * size;
const h = size => height / height * size;
const w = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, h, w, realWidth, realHeight};