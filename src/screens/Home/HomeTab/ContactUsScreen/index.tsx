import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {
  DarkBlue,
  DarkBlueButton,
  LightGrayColor,
  grayE8,
  grayOuterLine,
  secondaryTextColor,
  white,
} from '../../../../theme/Colors';
import {
  BootCampRoundLogo,
  ChatIcon,
  Cross,
  ImageIcon,
  StepDoneIcon,
  UpArrowIcon,
} from '../../../../assets/images';
import {useNavigation} from '@react-navigation/native';
import Fonts from '../../../../assets/Fonts';
import CustomButton from '../../../../components/CustomButton';
import Header from '../../../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';

const ContactUsScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
    const [chatText, setChatText] = useState('');
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  const customtInputToolbar = (props: {props: any}) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: 'white',
          borderTopColor: '#E8E8E8',
          borderTopWidth: 1,
          padding: 8,
        }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'}/> 
      <Header
        type="white"
        titleStyle={styles.headerTitle}
        title="MRCS Boot Camp UK"
        isLogo={true}
        isThreeDots={true}
        containerStyle={ Platform.OS=='android'? {marginTop:35}:{}}
      />
      {/* <View style={styles.faqBotContainer}>
          <BootCampRoundLogo style={{alignSelf: 'center', marginLeft: 20}} />
        </View> */}
      {/* <GiftedChat
          messages={messages}
          messagesContainerStyle={styles.messageContainer}
          placeholder='Message MRCS Boot Camp Uk'
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderSend={()=>
          <View style={{backgroundColor:'red'}}>

          </View>}
        /> */}
    <KeyboardAvoidingView behavior={Platform.OS=='ios'?'padding':'height'}>
      <View style={styles.inputContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            maxHeight: 80,
            marginTop: 15,
          }}>
          <TextInput
            style={{
              fontFamily: Fonts.POPPINS_REGULAR,
              maxHeight: 80,
              width: '90%',
            }}
            onChangeText={(txt)=>setChatText(txt)}
            numberOfLines={3}
            placeholder="Message MRCS Boot Camp Uk"
            multiline={true}
          />
          <Image
            source={UpArrowIcon}
            style={{height: 15, width: 15, alignSelf: 'center', marginTop: -3}}
          />
        </View>
        <View
          style={[{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          },Platform.OS=='android'?{marginBottom:10}:{}]}>
          <View style={{flexDirection: 'row'}}>
            <ChatIcon height={14} style={{alignSelf: 'center'}} />
            <Text style={{fontFamily: Fonts.POPPINS_MEDIUM,alignSelf:'center'}}>Chat</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <ImageIcon  height={16} style={{alignSelf: 'center'}}/>
            <TouchableOpacity style={[styles.sendBtnStyle,chatText.length>0?{backgroundColor:DarkBlueButton}:{}]}>
            <Text style={[styles.sendBtnTxtStyle,]}>Send</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
    color: DarkBlue,
    marginLeft: 10,
    alignSelf: 'center',

  },
  faqBotContainer: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  inputContainer: {
    borderTopWidth: 1,
    borderTopColor: grayE8,
    paddingBottom: 5,
    paddingHorizontal: 20,
  },
  sendBtnStyle:{
    borderRadius:15,backgroundColor:grayOuterLine,width:60,paddingVertical:4,justifyContent:'center'
  },
  sendBtnTxtStyle:{
    fontFamily: Fonts.POPPINS_MEDIUM,color:'white',alignSelf:'center'
  },
});
