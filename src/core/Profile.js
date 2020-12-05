import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native'
import ScrollCard from '../components/card/ScrollCard';
import {DpData} from '../resource/data/DpData'

const {width, height} = Dimensions.get('window');

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
      backgroundColor: '#13b4ec',
      alignItems: 'center',
      justifyContent: 'center',
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
        <View style={styles.container}>
        <Text>hola</Text>
        </View>
        <View style={styles.containerCenter}> 
        <ScrollCard data={DpData}></ScrollCard>
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

export default Profile;