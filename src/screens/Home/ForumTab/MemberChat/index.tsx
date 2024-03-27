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
  Keyboard,
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
import {NavigationProp, RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import Fonts from '../../../../assets/Fonts';
import CustomButton from '../../../../components/CustomButton';
import Header from '../../../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MemberChat = () => {
  const navigation = useNavigation() as NavigationProp<any>
  const route =useRoute() as RouteProp<any>
  const {name} = route.params
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

  const inset = useSafeAreaInsets()
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        isProfileImage 
        title={name}
        containerStyle={[styles.headerStyle,]}
        subTitle={'MRCS Boot Camp UK'}
        isThreeDots={true}
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
            maxHeight:  80,
            marginTop: 15,
          }}>
          <TextInput
            style={{
              fontFamily: Fonts.POPPINS_REGULAR,
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
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <ChatIcon height={14} style={{alignSelf: 'center'}} />
            <Text style={{fontFamily: Fonts.POPPINS_MEDIUM,alignSelf:'center'}}>Chat</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <ImageIcon  height={16} style={{alignSelf: 'center'}}/>
            <TouchableOpacity 
            onPress={()=>Keyboard.dismiss()}
            style={[styles.sendBtnStyle,chatText.length>0?{backgroundColor:DarkBlueButton}:{}]}>
            <Text style={[styles.sendBtnTxtStyle,]}>Send</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
      </KeyboardAvoidingView>

    </View>
  );
};

export default MemberChat;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'space-between',
  },
  headerStyle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: DarkBlue,
    paddingTop: Platform.OS == 'android' ? 25 : 40,
    height: Platform.OS == 'android' ? 90 : 100,
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
    paddingBottom: Platform.OS =='android'?10:20,
    paddingHorizontal: 20,
  },
  sendBtnStyle:{
    borderRadius:15,backgroundColor:grayOuterLine,width:60,paddingVertical:4,justifyContent:'center'
  },
  sendBtnTxtStyle:{
    fontFamily: Fonts.POPPINS_MEDIUM,color:'white',alignSelf:'center'
  },
});
