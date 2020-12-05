import React from 'react'
import {Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'

export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 0.1,
      backgroundColor: '#F2F2F2',
      flexDirection: 'row'
    },
    textFecha: {
      flex: 0.2,
      padding: 2,
      borderRightWidth: 2,
      borderColor: '#8E8888',
      marginRight: 30,
      alignItems: 'center',
    },
    datosDP:{
      flex: 0.7,
      padding: 2,
      borderWidth: 1,
      borderColor: '#EAE4E4',
      backgroundColor: '#f6f6f6',
      borderRadius: 10,
      marginVertical: 5
    },
  });

const Card =({item})=>{
    return(
        <>
        <View style={styles.container}>
          <View style={styles.textFecha}>
            <Text style={{marginTop: 30}}>{item.fecha}</Text></View>
            <TouchableOpacity style={styles.datosDP} onPress={(e)=>console.warn('datos')}>
            <View >
            <Text>Dialis Peritoneal</Text>
            <Text>Ultra Filtracion: {item.ultra} ml/h</Text>
            <Text>Presion Arterial: {item.presion}</Text>
            <Text>Peso: {item.peso} kg</Text>
            </View>
            </TouchableOpacity>
          </View>
        </>
    )
};

export default Card;