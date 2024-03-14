import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View,Linking } from 'react-native'
import { styles } from './style'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation() as NavigationProp<any>

    const handleTermsPress = () => {
        Linking.openURL('https://www.mrcsbootcamp.com/terms-conditions')
      };
    
    const handlePrivacyPress = () => {
      Linking.openURL('https://www.mrcsbootcamp.com/privacy-policy');
    };

    const goToSignIn = ()=>{
      navigation.navigate('SignIn')
    }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.tagline}>MRCS Boot Camp UK</Text>
      <Image
        style={styles.appIcon}
        resizeMode="contain"
        source={require('../../assets/images/appIcon.png')}
      />
      <TouchableOpacity  style={styles.button} onPress={goToSignIn}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.policyText}>
        By signing up you agree to our{' '}
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={handleTermsPress}
          >
          Terms of Use
        </Text>
        , to get email & updates, and you acknowledge that you have read the{' '}
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={handlePrivacyPress}>
          Privacy Policy
        </Text>
      </Text>
    </SafeAreaView>
  );
}

export default Login