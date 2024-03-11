import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import {DarkBlue, DarkBlueButton, LightGrayColor} from '../../theme/Colors';
import CustomButton from '../../components/CustomButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import AnimatedPlaceholderInput from '../../components/AnimatedPlaceHolderInput';
import {HeaderBell} from '../../assets/images';

function CreatePassword() {
  const navigation = useNavigation() as NavigationProp<any>;
  const [isValidPassword, setIsValidPassword] = useState(true); // Initially assume email is valid
  const [isValidPassword2, setIsValidPassword2] = useState(true); // Initially assume email is valid

  const [loader, setLoader] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [password2, setPassword2] = useState('');
  const password2Ref = useRef<TextInput>(null); // Ref for the TextInput

  const handleLogin = async () => {
    setLoader(true);
    const isValid = await authenticateLogin();
    setIsValidPassword(isValid);
    setLoader(false);
  };

  const authenticateLogin = async (): Promise<boolean> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };

  const checkPasswordValidation = (txt: string) => {
    if (txt.length < 6) {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(true);
    }
  };

  const checkPassword2Validation = (txt: string) => {
    if (password != txt) {
      setIsValidPassword2(false);
    } else {
      setIsValidPassword2(true);
    }
  };

  useEffect(() => {
    if (password.length > 0) checkPasswordValidation(password);
    if (password2.length > 0) {
      checkPassword2Validation(password2);
    }
  }, [password, password2]);

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
        <Text style={styles.title}>{'Create Your Password'}</Text>
        <AnimatedPlaceholderInput
          // ref={passwordRef}
          label="Password (at least 6 characters)"
          labelColor={isValidPassword ? '' : 'red'}
          value={password}
          onEndEditing={() => {
            password2Ref.current?.focus();
            if (password.length == 0) {
              setIsValidPassword(false);
            }
          }}
          autoFocus={true}
          placeholder="Enter Yor password"
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
            Password must have at least 6 character
          </Text>
        )}
        <View style={{marginVertical: 5}} />
        <AnimatedPlaceholderInput
          ref={password2Ref}
          label="Confirm password"
          labelColor={isValidPassword2 ? '' : 'red'}
          value={password2}
          placeholder="Re-enter yor password"
          placeholderTextColor={isValidPassword2 ? 'gray' : 'red'}
          secureTextEntry={!showPassword2}
          showPassword={showPassword2}
          onChangeText={txt => {
            setPassword2(txt);
          }}
          rightIconToggle={() => setShowPassword2(!showPassword2)}
        />
        {!isValidPassword2 && (
          <Text style={styles.invalidInput}>
            Passwords don't match, try again
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
            title="Create Password"
            validate={loader}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default CreatePassword;
