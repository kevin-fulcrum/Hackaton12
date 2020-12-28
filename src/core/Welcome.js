import React, {useState, createContext} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput} from 'react-native'
import axios from 'axios'
import { set } from 'react-native-reanimated';
import configiguracion from "../../config"
import ModalMensajes from '../components/modal/ModalMensajes';

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
    imagenEnviar: {
      width: width/10,
      height: height/18,
      marginTop: 2
  },
    textInput: {
        borderWidth: 1,
        borderColor: '#2da4f1',
        borderRadius: 10,
        marginRight: 5,
        color: '#315f85',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
    },
  });
  

  //export const paciente1 = createContext({color: 'rojo'});

  const Welcome =({navigation})=>{
  const [valor , setValor] = useState({});
  const [visible, setVisible] = useState(false)

  const enviar=()=>{
    axios.post('https://nameless-plains-78392.herokuapp.com/api/token/',{
      "username": configiguracion.USUARIO,
      "password": configiguracion.CLAVE
      })
      .then(
      (response)=>{
        const auth="Bearer "+response.data.access
        axios.get('https://nameless-plains-78392.herokuapp.com/usuarios?search='+valor,
        {
          headers:{'Authorization': auth}
        }
        )
        .then(
          (res)=>{
            console.warn( res.data.length)
            if (res.data.length===0){
              setVisible(true)
            }else{
            console.warn('welcome', res.data[0].paciente)
            navigation.navigate('Principal', res.data[0].paciente)
            }
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
        <ModalMensajes visible={visible} setVisible={setVisible}></ModalMensajes>
            <Image
                source={{
                uri: 'https://us.123rf.com/450wm/3dmask/3dmask1710/3dmask171000033/88271730-doctor-3d-que-se%C3%B1ala-a-la-pared-vac%C3%ADa-ilustraci%C3%B3n-con-el-fondo-blanco-aislado.jpg?ver=6',
                }}
                style={styles.imagen}> 
            </Image>
            <View style={{flexDirection: 'row'}}>   
            <TextInput style={styles.textInput} onChangeText={(e)=>{setValor(e)}} placeholder='Ingrese Documento de Identidad' keyboardType='number-pad' maxLength={10} ></TextInput>
            <TouchableOpacity onPress={enviar} >
            <Image
                style={styles.imagenEnviar}
                source={require('../resource/static/images/icons/arrow.png')}
            />
            </TouchableOpacity>
            </View> 
        </View>
        </>
    )
};
export default Welcome;