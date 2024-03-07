import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'

const Login = () => {

    const handleTermsPress = () => {
        console.log('Terms of Use pressed');
      };
    
      const handlePrivacyPress = () => {
        console.log('Privacy Policy pressed');
      };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.tagline}>MRCS Boot Camp UK</Text>
      <Image
        style={styles.appIcon}
        resizeMode="contain"
        source={require('../../assets/images/appIcon.png')}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.policyText}>
        By signing up you agree to our{' '}
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={handleTermsPress}>
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