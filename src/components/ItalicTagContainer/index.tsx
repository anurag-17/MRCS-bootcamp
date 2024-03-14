import React from 'react';
import { View, Text, TextStyle, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { LightPrimaryTextColor, black, secondaryTextColor, white } from '../../theme/Colors';
import Fonts from '../../assets/Fonts';

interface ItalicTagContainerProps {
  topText: string;
  tagText: string;
  detailsText: string;
  textStyle?:  StyleProp<TextStyle> ;
  tagTextStyle?: TextStyle;
  detailsTextStyle?: TextStyle;
  containerStyle?:StyleProp<ViewStyle>;
}

const ItalicTagContainer: React.FC<ItalicTagContainerProps> = ({
  topText,
  tagText,
  detailsText,
  textStyle,
  tagTextStyle,
  detailsTextStyle,
  containerStyle
}) => {
  return (
    <View style={[styles.container,containerStyle]}>
      <Text style={[styles.topText, textStyle]}>{topText}</Text>
      <Text style={[styles.tagText, tagTextStyle]}>{tagText}</Text>
      <Text style={[styles.detailsText, detailsTextStyle]}>{detailsText}</Text>
    </View>
  );
};

const styles  =StyleSheet.create( {
    container:{
        marginVertical:10,
        backgroundColor:white,
        marginHorizontal:20,
        paddingVertical:40,
        borderRadius:5,
        justifyContent:'center',
        paddingHorizontal:40,
    
    },
    topText:{
        fontFamily:Fonts.POPPINS_SEMIBOLD,
        fontWeight:'600',
        fontSize:18,
        letterSpacing:5,
        color:LightPrimaryTextColor
    },
    tagText:{
        fontFamily:Fonts.EBGARAMOND_MEDIUM_ITALIC,
        fontWeight:'500',
        fontSize:14,
        color:secondaryTextColor,
    },
    detailsText:{
        fontFamily:Fonts.WIX_MEDIUM,
        fontWeight:'500',
        fontSize:14,
        width:'95%',
        color:secondaryTextColor,
        marginTop:20,
        lineHeight:20
    },
});

export default ItalicTagContainer;
