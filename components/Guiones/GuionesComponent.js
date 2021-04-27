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

export default function GuionesComponent(props){
  const { palabra } = props

  return (
    <View style={styles.content}>

        {
        palabra.map((i,data) => (  
          <View style={styles.letra}>
            <Text style={styles.guion}>
              { i.estado == true ? i.letra : '' }

            </Text>
          </View>
          ))
        }

    </View>


  )

}

const styles = StyleSheet.create({

  content:{
    flexDirection: 'row', 
    alignContent:'center', 
    alignItems: 'center', 
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    top:75
  },
  letra:{
    width: 50, 
    alignItems: 'center',
    borderBottomWidth: 1,
    marginLeft: 10
  },
  guion:{
    fontSize: 30,
    fontWeight: 'bold'
   
  }

});