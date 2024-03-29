import React, {useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  DarkBlue,
  DarkBlueButton,
  black11,
  gray8E,
  grayD9,
  grayE8EB,
  secondaryTextColor,
  tertiaryTextColor,
  white,
} from '../../../../theme/Colors';
import Header from '../../../../components/Header';
import CustomButton from '../../../../components/CustomButton';
import Fonts from '../../../../assets/Fonts';
import Modal from 'react-native-modal';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const Inbox = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation() as NavigationProp<any>

  const _goToNewMessageScreen = () => navigation.navigate('NewMessage')
  
  return (
    <View style={styles.mainContainer}>
      <Header
        type="blue"
        title={'Inbox'}
        containerStyle={styles.headerStyle}
        subTitle={'MRCS Boot Camp UK'}
        isThreeDots={true}
        onPressDots={() => console.log('workign ...')}
        onPressEditBoard={_goToNewMessageScreen}
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.startTxt}>Start Chatting</Text>
        <Text style={styles.youTxt}>
          You can view and reply to messages from here.
        </Text>

        <CustomButton
          buttonStyle={styles.newMsgButton}
          textStyle={styles.newMsgText}
          onPress={_goToNewMessageScreen}
          title="New Message"
          validate={false}
        />
        <TouchableOpacity style={{marginTop: 20}}>
          <Text style={styles.gotoTxt}>Go to Archive</Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isModalVisible}
        style={{justifyContent: 'flex-end'}}
        backdropColor="rgba(0,0,0,0.26)"
        onBackdropPress={() => setIsModalVisible(false)}
        onSwipeComplete={() => setIsModalVisible(false)}
        useNativeDriverForBackdrop
        swipeDirection={['down']}>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: 'white',
            marginBottom: 20,
          }}>
          <View style={styles.modalNotch} />
          <Text style={styles.modalTitleText}>
            MRCS Boot Camp UK Conversations
          </Text>
          <View style={styles.br} />
        </View>
      </Modal>
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerStyle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
    backgroundColor: DarkBlue,
    paddingTop: Platform.OS == 'android' ? 25 : 40,
    height: Platform.OS == 'android' ? 90 : 100,
  },
  newMsgButton: {
    backgroundColor: DarkBlue,
    height: 40,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  newMsgText: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: white,
    fontSize: 14,
  },
  startTxt: {
    fontSize: 14,
    color: secondaryTextColor,
    fontFamily: Fonts.POPPINS_MEDIUM,
    alignSelf: 'center',
  },
  youTxt: {
    fontSize: 13,
    color: secondaryTextColor,
    fontFamily: Fonts.POPPINS_LIGHT,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  gotoTxt: {
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
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
});
