import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { DarkBlue, DarkBlueButton, LightGrayColor } from '../../theme/Colors'
import CustomButton from '../../components/CustomButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import AnimatedPlaceholderInput from '../../components/AnimatedPlaceHolderInput'

function Password() {
  
  const navigation = useNavigation() as NavigationProp<any>
  const [email, setEmail] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true); // Initially assume email is valid
  const [loader, setLoader] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async() => {
    setLoader(true)
    const isValid = await authenticateLogin();
    setIsValidPassword(isValid);
    setLoader(false)
    if(isValid)
    navigation.navigate("Home")

  };

  const authenticateLogin = async (): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true); 
      }, 1000);
    });
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
        <Text style={styles.title}>{'Enter Your Password to Continue'}</Text>
        {/* <Text
          style={[
            styles.enterPassword,
            !isValidPassword ? {color: 'red'} : {},
          ]}>
          {'Enter your password'}
        </Text> */}
        {/* <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={'gray'}
            style={[styles.passwordInput]}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}>
            {password.length>0 && <Image
              source={
                showPassword
                  ? require('../../assets/images/view.png')
                  : require('../../assets/images/hide.png')
              }
              style={styles.eyeImage}
            />}
          </TouchableOpacity>
        </View> */}
              <View style={{marginTop:30}}/>

        <AnimatedPlaceholderInput
          // ref={passwordRef}
          label="Enter your password"
          labelColor={isValidPassword ? '' : 'red'}
          value={password}
          onEndEditing={() => {
            if (password.length == 0) {
              setIsValidPassword(false);
            }
          }}
          autoFocus={true}
          rightIcon='true'
          placeholder="Password"
          placeholderTextColor={isValidPassword ? 'gray' : 'red'}
          secureTextEntry={!showPassword}
          showPassword={showPassword}
          onChangeText={txt => {
            setPassword(txt);
          }}
          rightIconToggle={() => setShowPassword(!showPassword)}
        />
        {!isValidPassword && (
          <Text style={styles.invalidInput}>
            Please re-enter your email or pawssword to log in
          </Text>
        )}
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {password.length > 0 && (
          <CustomButton
            buttonStyle={{
              alignSelf: 'center',
              marginVertical: 15,
            }}
            onPress={handleLogin}
            title="Login"
            validate={loader}
          />
        )}
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Password