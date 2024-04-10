import React, { FC, ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { Dialog } from 'react-native-ui-lib'
import Fonts from '../../assets/Fonts';
import { grayE8EB, gray8E, grayD9 } from '../../theme/Colors';

interface CustomModalProps{
  isVisible:boolean;
  toggleVisible:()=>void;
  title?:string
  children:ReactNode

}

const CustomModal:FC<CustomModalProps> = ({
  isVisible,
  toggleVisible,
  children,
  title
  
}) => {
  return (
    <Dialog 
      visible={isVisible}
      >
        <Modal
        isVisible={isVisible}
        style={{justifyContent: 'flex-end'}}
        backdropColor="rgba(0,0,0,0.26)"
        onBackdropPress={toggleVisible}
        onSwipeComplete={toggleVisible}
        useNativeDriverForBackdrop
        swipeDirection={['down']}>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: 'white',
            marginBottom: 20,
          }}>
          <View style={styles.modalNotch} />
          <Text style={styles.modalTitleText}>{title}</Text>
          <View style={styles.br} />
          {children}
        </View>
      </Modal>
        
      </Dialog>
  )
}

export default CustomModal

const styles  = StyleSheet.create({
  modalNotch: {
    width: 50,
    height: 4,
    borderRadius: 5,
    backgroundColor: grayE8EB,
    marginTop: 10,
    alignSelf: 'center',
  },
  modalTitleText: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: gray8E,
    marginHorizontal: 20,
  },
  br: {
    marginTop: 15,
    height: 1,
    width: 'auto',
    backgroundColor: grayD9,
  },
  itemBtnText:{
    fontFamily:Fonts.POPPINS_SEMIBOLD,
    fontSize:14,
  }
})