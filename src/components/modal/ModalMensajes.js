import React from 'react'
import {View, Modal, Text, TouchableOpacity, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window');

const ModalMensajes=({visible,setVisible})=>{
    return(
        <>
        <View opacity= {0.5} style={{alignItems: 'center'}}>
            <Modal visible={visible} transparent={true} animationType='slide' presentationStyle='overFullScreen'>
                <View style={{marginTop: height/2.5,justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{margin: 20,padding: 35, alignItems: 'center',backgroundColor: 'white',shadowColor: '#000000', shadowOpacity: 1,shadowOffset: {width:0,height:2}, shadowRadius: 10, elevation: 5}}>
                    <Text>
                        Usuario no Registrado
                    </Text>
                    <TouchableOpacity onPress={()=>(setVisible(false))}>
                        <Text>cerrar</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
        </>
    )
}
export default ModalMensajes;