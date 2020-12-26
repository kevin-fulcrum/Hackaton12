import React, {useState, createContext} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput} from 'react-native'
import axios from 'axios'
import {USERNAME,PASSWORD} from 'react-native-dotenv'

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FBFEFA',
    },
    imagen: {
        width: width/1.5,
        height: height/2,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#2da4f1',
        borderRadius: 10,
        color: '#315f85',
        marginHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
  });
  

  export const paciente1 = createContext({color: 'rojo'});

  const Welcome =({navigation})=>{
  const [valor , setValor] = useState({});  

  const enviar=()=>{
    axios.post('https://nameless-plains-78392.herokuapp.com/api/token/',{
        "username": USERNAME,
        "password": PASSWORD
      })
      .then(
      (response)=>{
        const auth="Bearer "+response.data.access
        axios.get('https://nameless-plains-78392.herokuapp.com/usuarios?search=72412676',
        {
          headers:{'Authorization': auth}
        }
        )
        .then(
          (res)=>{
            console.warn('exito', res.data[0].paciente)
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
            <TouchableOpacity onPress={()=>{enviar()}}>
            <Image
            source={{
            uri: 'https://us.123rf.com/450wm/3dmask/3dmask1710/3dmask171000033/88271730-doctor-3d-que-se%C3%B1ala-a-la-pared-vac%C3%ADa-ilustraci%C3%B3n-con-el-fondo-blanco-aislado.jpg?ver=6',
            }}
            style={styles.imagen}> 
            </Image>    
            </TouchableOpacity>
            <TextInput style={styles.textInput} onChangeText={(e)=>{setValor(e)}} placeholder='Ingrese Documento de Identidad' keyboardType='number-pad' maxLength={10} ></TextInput>
        </View>
        </>
    )
};
export default Welcome;