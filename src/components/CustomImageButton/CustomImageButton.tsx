import React, {ReactNode} from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
  TouchableHighlight,
} from 'react-native';
import {LightBlue, grayE8EB} from '../../theme/Colors';
import Fonts from '../../assets/Fonts';

interface CustomImageButtonProps {
  onPress: () => void;
  title?: string;
  validate?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  isTouchableHighLight?: boolean;
  underLayColor?: string;
  iconImage?: ReactNode;
}

const CustomImageButton: React.FC<CustomImageButtonProps> = ({
  onPress,
  title,
  validate = false,
  buttonStyle,
  textStyle,
  isTouchableHighLight = false,
  underLayColor,
  iconImage,
}) => {
  if (isTouchableHighLight) {
    return (
      <TouchableHighlight
        underlayColor={underLayColor ?? grayE8EB}
        style={[
          styles.button,
          buttonStyle,
          validate ? {paddingHorizontal: 10} : {},
        ]}
        onPress={onPress}
        disabled={validate}>
      {iconImage ? iconImage :null}
        {validate ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        )}
      </TouchableHighlight>
    );
  }
  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonStyle,
        validate ? {paddingHorizontal: 10} : {},
      ]}
      onPress={onPress}
      disabled={validate}>
      {iconImage ? iconImage :null}
      {validate ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: LightBlue,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
    fontFamily: Fonts.WIX_REGULAR,
  },
});

export default CustomImageButton;
