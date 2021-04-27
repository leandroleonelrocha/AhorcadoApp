/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AhorcadoComponent from './components/Ahorcado/AhorcadoComponent';
import GuionesComponent from './components/Guiones/GuionesComponent';
import BotoneraComponent from './components/Botonera/BotoneraComponent';
import fondo from './assets/img/fondo.jpg';
export default function App(){

  const [fallos, setFallos] = useState(2)
  const [palabra, setPalabra] = useState([]);
  const [letraPosition, setLetraPosition] = useState(0);
  

  const checkear = () => {
    
    let tamanoPalabra = palabra.length -1;
    let state = false;

    if(tamanoPalabra === letraPosition){
      state = true;
    }

    return state

  }

  const updateLetra = (key) => {

    var stateCopy = Object.assign([], palabra);
    stateCopy[key] = Object.assign([], stateCopy[key]);
    stateCopy[key].estado = true;
    setPalabra(stateCopy);

  }


  const ejecutar = (item) => {


    if(palabra[letraPosition].letra === item.letra){
      console.log('ok')
      updateLetra(letraPosition)
      setLetraPosition( letraPosition + 1 )
      
      if(checkear() == true){
        console.log('ganaste')
        getPalabraAdivinar();
      }
    }else{
      console.log('fallo')
    }

    //console.log(palabra[0].letra === letraOprimida)
    //console.log(palabra[0].estado === false);
    /*
    for (let i = 0; i < palabra.length ; i++) {



      
      if( palabra[i].estado === false && palabra[i].letra === letraOprimida ){
        console.log(i + ': ganaste. Agrego letra a una nueva variable')
        return false
      }else{

        console.log(i + ': perdiste. Agrego un nuevo fallo')
        return false
      }


    }
          */





  }

  const getPalabraAdivinar = () => {

    let palabras = ['HOLA', 'PRUEBA', 'CIERRE', 'SIERRA', 'OLA', 'GATO'];
    let palabra = palabras[Math.floor(Math.random() * palabras.length)].split('');
    /*
    let p = [{"estado": false, "letra": "A", "position": 0}, 
      {"estado": false, "letra": "B", "position": 1}, 
      {"estado": false, "letra": "C", "position": 2}, 
      {"estado": false, "letra": "D", "position": 3}];

    return p;
    */
    return palabra.map( (l,i) => ({letra: l, estado: false, position: i }))
      

  }

  
  /*
  const getInicioPalabra = () => {

    let palabraIniciada  = "";
    
    for(let i=0; i<palabra.length; i++){

      palabraIniciada += "-";

    }

    return palabraIniciada;
    

  }
  */

  useEffect(() => {
    //setPalabra('hola')
    setPalabra(getPalabraAdivinar());
    //setInicioPalabra(getInicioPalabra());
   
  }, []);
  


  return (
    <View style={styles.conteiner}>
     
      <ImageBackground source={fondo} style={styles.img}>
       
        <View style={styles.main}>
          <View style={styles.hora}>
            <Text style={styles.horaText}>12:00</Text>
            
          </View>
          <View style={styles.guionesContent}>
            <GuionesComponent palabra={palabra} />
          </View>
      
        </View>
        <View style={styles.botoneraContent}>
              
        </View>
           
      </ImageBackground>
      
      
      {
        /*


        <View style={styles.imagen}>
          <AhorcadoComponent fallos={fallos} />
        
        </View>
        <View style={styles.guiones}>
          <GuionesComponent palabra={palabra}  />
        
        </View>
        <View style={styles.botonera}>
     
          <BotoneraComponent ejecutar={ejecutar} />
        
        </View>
        */
        }
    </View>
  )

}

const styles = StyleSheet.create({

  conteiner:{
    flex: 1,
    borderWidth: 1,
    borderColor: 'yellow'

    
  },
  img:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderWidth: 1
  }, 
  
  main:{
    height: '50%',
    borderWidth: 1,
    borderColor: 'yellow'
 
  },
  hora:{
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  horaText:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  guionesContent:{
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    
    
  },
  botoneraContent:{
    borderWidth: 1,
    borderColor: 'yellow',
    height: '10%'
 
  }
 

  /*
  imagen:{
    flex:1,

    backgroundColor: 'green'
  },
  guiones: {
    flex: 1,
    backgroundColor: 'red'
  },
  botonera: {

    backgroundColor: 'orange',
    borderWidth: 1,

    flex: 1
   
  }
  */


});