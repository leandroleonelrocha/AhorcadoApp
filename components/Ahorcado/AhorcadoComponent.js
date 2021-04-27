/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import imagenes from '../../utils/imagenes';

export default function AhorcadoComponent(props){
  
  const { fallos } = props

  const imagenesFallos = {
    '0': imagenes.img0,
    '1': imagenes.img1,
    '2': imagenes.img2,
    '3': imagenes.img3,
    '4': imagenes.img4,
    '5': imagenes.img5,
    '6': imagenes.img6,


  }
  
  return (
    <Image 
      source={ imagenesFallos[fallos]} 
      style={{ flex: 1, width: undefined, height: undefined, resizeMode: 'contain', margin: 20}} />


  )

}