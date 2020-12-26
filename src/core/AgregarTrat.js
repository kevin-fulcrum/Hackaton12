import React, {useEffect, useState, useContext} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput} from 'react-native'
import axios from 'axios'
import {paciente1} from './Welcome'
import {USERNAME,PASSWORD} from 'react-native-dotenv'

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flex: 0.08,
      backgroundColor: '#13b4ec',
    },
    containerCenter: {  
      flex: 0.85,
      backgroundColor: '#f2f2f2',
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerEnd: {
      flex: 0.07,
      flexDirection: 'row',
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.15
    },
    home:{
      width: width/14,
      height: height/28,
      borderRadius: 2,
    },
    back:{
      width: width/14,
      height: height/28,
    },
    textInput: {
      borderWidth: 1,
      borderRadius: 15,
      width: width/1.5,
      textAlign: 'center',
      marginVertical: 10,
    }
  });

const AgregarTrat =({navigation})=>{

  const [paciente, setPaciente] = useState('');
  const [peso, setPeso] = useState('');
  const [pres_art, setPres_art] = useState('');
  const [ultrafil, setUltrafil] = useState('');

  console.warn(useContext(paciente1))
  //console.warn(id);
  const [datos, setDatos] = useState({
      paciente: "",
      peso: "",
      pres_art: "",
      ultrafil: "",
      datosPaciente: {},
  })
  
  const idPaciente='http://192.168.1.37:8000/pacientes/'

  useEffect(()=>{
      setDatos({
          paciente: idPaciente+paciente+'/',
          peso: peso,
          pres_art: pres_art,
          ultrafil: ultrafil,
          datosPaciente: {},
      })
      

  },[paciente, peso, pres_art, ultrafil])

  const guardar = () =>{
      //navigation.navigate('ApiEnvio', datos)
      axios.post('https://nameless-plains-78392.herokuapp.com/api/token/',{
        "username": USERNAME,
        "password": PASSWORD
      })
      .then(
      (response)=>{
        const auth="Bearer "+response.data.access
        axios.post('https://nameless-plains-78392.herokuapp.com/dialisis_peritoneal/',
        datos,
        {
          headers:{'Authorization': auth}
        }
        )
        .then(
          (res)=>{
            console.warn('exito')
            navigation.navigate('Principal')
          }
        )
        .catch(
          (res)=>{
            console.warn('Error:' ,res)
          }
        )
      }
      )
      .catch(
        (response)=>{
          console.warn('Error:' ,response)
        }
      )
  }

    return(
        <>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{flexDirection: 'row',fontWeight: 'bold', marginTop: 5}}> 
                  <Image
                    source={{
                      uri: 'https://img.icons8.com/ultraviolet/40/000000/back.png',
                    }}
                    style={styles.back}> 
                  </Image>
                  <Text style={{color: '#f2f2f2', marginTop: 3}}>Back</Text>
            </View>
            </TouchableOpacity>
        </View>
        <View style={styles.containerCenter}> 
        <Text>Ingrese los Siguientes Datos</Text>
        <TextInput style={styles.textInput} placeholder='Ingrese id Paciente' onChangeText={(e) => {setPaciente(e)}} ></TextInput>
        <TextInput style={styles.textInput} keyboardType='number-pad' placeholder='Ingrese su Peso' onChangeText={(e) => {setPeso(e)}} ></TextInput>
        <TextInput style={styles.textInput} keyboardType='decimal-pad' placeholder='Ingrese su Presión Arterial' onChangeText={(e) => {setPres_art(e)}} ></TextInput>
        <TextInput style={styles.textInput} keyboardType='number-pad' placeholder='Ingrese su Ultrafiltración' onChangeText={(e) => {setUltrafil(e)}} ></TextInput>
        <TouchableOpacity onPress = {guardar}>
            <Text style={{fontSize: 20}}>Guardar</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.containerEnd}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Principal')}}>
            <View>
                  <Image
                    source={{
                      uri: 'https://img.icons8.com/ultraviolet/40/000000/home--v1.png',
                    }}
                    style={styles.home}> 
                  </Image>
            </View>
            </TouchableOpacity>
        </View>
        </>
    )
};

export default AgregarTrat;