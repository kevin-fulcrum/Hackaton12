import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import ScrollCard from '../components/card/ScrollCard';
import {DpData} from '../resource/data/DpData'

export const styles = StyleSheet.create({
    container: {
      flex: 0.05,
      backgroundColor: '#13b4ec',
    },
    containerCenter: {  
      flex: 0.9,
      backgroundColor: '#f2f2f2',
    },
    containerEnd: {
      flex: 0.05,
      flexDirection: 'row',
    }
  });

const Profile =()=>{
    return(
        <>
        <View style={styles.container}>
        <Text>hola</Text>
        </View>
        <View style={styles.containerCenter}> 
        <ScrollCard data={DpData}></ScrollCard>
        </View>
        <View style={styles.containerEnd}>
          <View style={{borderTopRightRadius: 30, backgroundColor: '#13b4ec', flex: 0.5}}>
          </View>
          <View style={{borderTopLeftRadius: 30, backgroundColor: '#13b4ec', flex: 0.5}}>
          </View>
        </View>
        </>
    )
};

export default Profile;