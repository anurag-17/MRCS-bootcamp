import React, { useState, useRef,forwardRef, useImperativeHandle } from 'react';
import { View, TextInput, Animated, StyleSheet, TextInputProps, TouchableOpacity, Image, TextStyle, ViewStyle } from 'react-native';
import Fonts from '../../assets/Fonts';
import { DDDDDD, DarkBlue, LightBlue, LightGrayColor, LightPrimaryTextColor, black, secondaryTextColor } from '../../theme/Colors';
import { styles } from './style';
interface AnimatedPlaceholderInputProps extends TextInputProps {
  label: string;
  labelColor:string;
  labelStyle?:TextStyle
  onPressLock?:()=>void
  value: string;
  ref?: any;
  containerStyle?:ViewStyle
}

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const EditProfileTextInput: React.FC<AnimatedPlaceholderInputProps> =forwardRef(({
  label,
  labelColor,
  containerStyle,
  onPressLock,
  value,
  ...rest
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const translateY = useRef(new Animated.Value(value ? -5 : 15)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(translateY, {
      toValue: -5,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(translateY, {
        toValue: 15,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }
  };

  // Expose methods using useImperativeHandle
  useImperativeHandle(ref, () => ({
    focus: () => {
      // Call focus method of the TextInput
      inputRef.current?.focus();
    }
  }));

  const inputRef = useRef<TextInput>(null);

  return (
    <View style={[styles.container,containerStyle]}>
      <Animated.Text
        style={[
          styles.label,
          { transform: [{ translateY }] },
          (isFocused ) ? styles.labelFocused : (value.length>0?styles.filledValueLable:{}),
          
        ]}
      >
        {label}
      </Animated.Text>

      <View style={[styles.inputContainer,isFocused?{borderBottomColor:black}:{} ]}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          {...rest}
        />
        {onPressLock && (
          <TouchableOpacity style={[styles.eyeIcon]} onPress={onPressLock}>
              <Image
                source={require('../../assets/images/lockP.png')}
                style={styles.lockIcon}

              />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

export default EditProfileTextInput