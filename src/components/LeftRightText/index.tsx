import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { DarkBlue, grayE8EB } from '../../theme/Colors'
import Fonts from '../../assets/Fonts'

interface LeftRightTextProps{
  leftText:string,
  rightText:string,
  onPressAll:()=>void,
  containerStyle?:ViewStyle
}

const LeftRightText:FC<LeftRightTextProps> = ({leftText,rightText, onPressAll,containerStyle}) => {
  return (
    <View style={[styles.rowBtwn,containerStyle]}>
        <Text style={styles.leftTxt}>{leftText}</Text>
        <TouchableOpacity onPress={onPressAll}>
          <Text style={[styles.rightTxt]}>{rightText}</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  rowBtwn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftTxt: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 14,
    color: DarkBlue,
  },
  rightTxt: {
    fontSize: 14,
    color: DarkBlue,
    fontFamily:Fonts.POPPINS_MEDIUM
  },
})

export default LeftRightText