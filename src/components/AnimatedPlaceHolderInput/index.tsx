import React, { useState, useRef,forwardRef, useImperativeHandle } from 'react';
import { View, TextInput, Animated, StyleSheet, TextInputProps, TouchableOpacity, Image } from 'react-native';
import Fonts from '../../assets/Fonts';
import { LightBlue, LightPrimaryTextColor } from '../../theme/Colors';
import { styles } from './style';
interface AnimatedPlaceholderInputProps extends TextInputProps {
  label: string;
  labelColor:string;
  placeholder: string;
  rightIcon?: string;
  showPassword?: boolean;
  rightIconToggle?: () => void;
  value: string;
  ref?: any
}

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const AnimatedPlaceholderInput: React.FC<AnimatedPlaceholderInputProps> =forwardRef(({
  label,
  labelColor,
  placeholder,
  rightIcon,
  showPassword,
  rightIconToggle,
  value,
  ...rest
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const translateY = useRef(new Animated.Value(20)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0.5,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) { // Check if the value is empty
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 20, // Move the label back to its original position
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

    // Expose methods using useImperativeHandle
    useImperativeHandle(ref, () => ({
      focus: () => {
        // Call focus method of the TextInput
        inputRef.current.focus();
      }
    }));
  
    const inputRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      {isFocused  ? <Animated.Text
        style={[
          
          styles.label,
          labelColor?{color:labelColor}:{color:LightBlue},
          { transform: [{ translateY }], },
          (value || isFocused) ? styles.labelFocused : null,
        ]}
      >
        {label}
      </Animated.Text>
      
    :
    value.length>0 &&
    <Animated.Text
        style={[
          
          styles.label,
          labelColor?{color:labelColor}:isFocused &&
          {color:LightBlue},
          { transform: [{ translateY }], },
          (value || isFocused) ? styles.labelFocused : null,
        ]}
      >
        {label}
      </Animated.Text>
      
    
    }
      <View style={[styles.inputContainer, labelColor?{borderBottomColor:labelColor}:{borderBottomColor:LightBlue}]}>
        <AnimatedTextInput
          ref={inputRef} // Assigning the ref
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={isFocused ? placeholder: label}
          {...rest}
        />
        {rightIcon && (
          <TouchableOpacity style={styles.eyeIcon} onPress={rightIconToggle}>
            {value.length > 0 && (
              <Image
                source={
                  showPassword
                    ? require('../../assets/images/view.png')
                    : require('../../assets/images/hide.png')
                }
                style={styles.eyeImage}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});


export default AnimatedPlaceholderInput;
