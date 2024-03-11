import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { DarkBlue, LightGrayColor } from '../../theme/Colors'
import CustomButton from '../../components/CustomButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import AnimatedPlaceholderInput from '../../components/AnimatedPlaceHolderInput'

function SignIn() {
  
  const navigation = useNavigation() as NavigationProp<any>
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); // Initially assume email is valid
  const [loader, setLoader] = useState(false);

  const handleContinue = () => {
    const isValid = validateEmail(email);
    setIsValidEmail(isValid);
    if (isValid) {
        setLoader(true)
        setTimeout(()=>{
            navigation.navigate('Password')
            setLoader(false)
        },200)
    }
  };

  const validateEmail = (email:string) => {
    // Basic email validation
    return /^\S+@\S+\.\S{2,}$/d.test(email);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>

      <View>
      <View style={styles.backArrowContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backArrowCircleButton}>
          <Image
            source={require('../../assets/images/backArrow.png')}
            style={styles.backArrow}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{'Welcome to MRCS Boot Camp UK'}</Text>
      <Text style={styles.enterEmailTitle}>
        {'Enter your email to continue'}
      </Text>
      <Text style={[styles.enterEmail,!isValidEmail?{color:'red'}:{}]}>{'Enter your email'}</Text>
      <TextInput
        placeholder="E.g example@mail.com"
        placeholderTextColor={'gray'}
        style={[styles.emailInput,]}
        onChangeText={(text) => setEmail(text)}
        
      />
      {/* <AnimatedPlaceholderInput
        label='Enter your email'
        placeholderTextColor={'gray'}
        labelColor={isValidEmail?'':'red'}
        value={email}
        placeholder="E.g example@mail.com"
        onChangeText={(text) => setEmail(text)}
        /> */}
      {!isValidEmail && (
        <Text style={styles.invalidInput}>
          Invalid email address
        </Text>
      )}
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      {email.length > 0 && (
        <CustomButton buttonStyle={{alignSelf:'center',marginVertical:15}} onPress={handleContinue} title="Continue" validate={loader}/>
      )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default SignIn