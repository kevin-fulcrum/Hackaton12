import React, {useEffect, useState} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput} from 'react-native'
import ScrollCard from '../components/card/ScrollCard';
import {DpData} from '../resource/data/DpData'

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flex: 0.08,
      backgroundColor: '#13b4ec',
    },
    containerCenter: {  
      flex: 0.85,
      backgroundColor: '#f2f2f2',
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
    }
  });

const AgregarTrat =({navigation, route})=>{

  const [fecha, setFecha] = useState('');
  const [ultra, setUltra] = useState('');
  const [presion, setPresion] = useState('');
  const [peso, setPeso] = useState('');
  const [foto, setFoto] = useState('https://fondosmil.com/fondo/20852.jpg');
  const [id, setId] = useState(route.params.length+1);
  //console.warn(id);
  const [datos, setDatos] = useState({
      fecha: "",
      ultra: "",
      presion: "",
      peso: "",
      foto: "",
      id: "",
  })
  
  useEffect(()=>{
      setDatos({
          fecha: fecha,
          ultra: ultra,
          presion: presion,
          peso: peso,
          foto: foto,
          id: id,
      })
      

  },[fecha, ultra, presion, peso, foto, id])

  const guardar = () =>{
      route.params.push(datos)
      navigation.navigate('Profile', route.params)
      console.warn(route.params)
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
        <Text>fecha</Text>
        <TextInput onChangeText={(e) => {setFecha(e)}} ></TextInput>
        <Text>ultra</Text>
        <TextInput onChangeText={(e) => {setUltra(e)}} ></TextInput>
        <Text>presion</Text>
        <TextInput onChangeText={(e) => {setPresion(e)}} ></TextInput>
        <Text>peso</Text>
        <TextInput onChangeText={(e) => {setPeso(e)}} ></TextInput>
        <TouchableOpacity onPress = {guardar}>
            <Text style={{fontSize: 20}}>Guardar </Text>
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