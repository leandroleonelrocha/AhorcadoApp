/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Touchable,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import imagenes from '../../utils/imagenes';

export default function BotoneraComponent(props){
  
  const { fallos, ejecutar } = props
  const [botones, setBotones] = useState()

  const getBotones = () => {

    let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return letras.map( (l) => ({ letra: l, estado: false }) )

  }



  const renderItem = ({item}) => (
    <View>
        <TouchableOpacity style={{borderWidth: 1, width: 50, height: 50 }} onPress={ () => ejecutar(item) }>
            <View style={{ alignContent: 'center', alignItems: 'center'}} > 
                <Text style={{ fontSize: 20, alignContent: 'center', alignItems: 'center'}}>{item.letra}</Text>
            </View>
        </TouchableOpacity>
    </View>
   
    
  );

  return (
    
    <FlatList
        data={getBotones()}
        renderItem={renderItem}
        keyExtractor={item => item.id}
    
    
    />
  


  )

}