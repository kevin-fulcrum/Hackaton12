import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 0.35,
      backgroundColor: '#13b4ec',
    },
    containerCenter: {  
      flex: 0.6,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerEnd: {
      flex: 0.05,
      flexDirection: 'row',
      backgroundColor: '#13b4ec',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagen: {
      width: width/5,
      height: height/9,
      borderRadius: 100,
      borderWidth: 4,
      borderColor: '#B6CAF4',
    },
    textoPerfil: {
      color: '#F1F4FA',
      fontWeight: 'bold',
      marginLeft: 15,
    },
    textoPerfilSEcundario: {
      color: '#F1F4FA',
      marginLeft: 15,
    },
    datosPersonales: {
      alignItems: 'center',
      flexDirection: 'row',
      width: width/1.5,
      height: height/6,
    },
    iconos:{
      width: width/6,
      height: height/11,
    },
    home:{
      width: width/14,
      height: height/28,
      borderRadius: 2,
    }
  });
const Profile =({navigation})=>{

  return(
        <>
        <View style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.datosPersonales}>
              <TouchableOpacity onPress={e=>(console.warn('foto'))}>
                <Image
                source={{
                  uri: 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg',
                }}
                style={styles.imagen}> 
                </Image>
              </TouchableOpacity>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.textoPerfil}>George Williams</Text>
                  <Text style={styles.textoPerfilSEcundario}>Paciente Dialisis Peritoneal</Text>
                  <Text style={styles.textoPerfilSEcundario}>Edad: 57 años</Text>
                </View>  
          </View>
        </View>
        <View style={styles.containerCenter}> 
                <View>
                  <TouchableOpacity style={{marginBottom: 40}} onPress={e=>(console.warn('Agregar datos'))}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                    source={{
                      uri: 'https://img.icons8.com/color/48/000000/add-image.png',
                    }}
                    style={styles.iconos}> 
                    </Image>
                    <Text style={{marginTop: 20}}>AGREGAR</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                    source={{
                      uri: 'https://img.icons8.com/fluent/48/000000/add-list.png',
                    }}
                    style={styles.iconos}> 
                    </Image>
                    <Text style={{marginTop: 20}}>VER DATOS</Text>
                  </View>
                  </TouchableOpacity>
                </View>
        </View>
        <View style={styles.containerEnd}>
            <TouchableOpacity onPress={()=>{console.warn('home')}}>
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
        </View>
        </>
    )
};

export default Profile;