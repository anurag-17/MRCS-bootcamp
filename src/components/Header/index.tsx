import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import { DarkBlue, white } from '../../theme/Colors';
import { WhiteBackArrow } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../assets/Fonts';

interface HeaderProps {
  title?: string;
  subTitle?:string
  isThreeDots?: boolean;
  isLogo?:boolean;
  isEdit?:boolean;
  containerStyle?:ViewStyle
}

const Header: React.FC<HeaderProps> = ({
    title,
    subTitle,
    isThreeDots,
    isLogo,
    isEdit,
    containerStyle
}) => {
    const navigation = useNavigation() 

  return (
  <View style={[styles.mainContainer,containerStyle]}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{alignSelf:'center'}}>
        <WhiteBackArrow style={styles.backArrow}/>
        </TouchableOpacity>
        <View style={{marginLeft:30,alignSelf:'center'}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.mrcsText}>{subTitle}</Text>
        </View>
  </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor:DarkBlue,
    height:50,
  },
  backArrow: {
    height: 20,
    width: 20,
    alignSelf:'center'
  },
  title:{
    fontFamily:Fonts.POPPINS_MEDIUM,
    fontSize:14,
    color:white
  },
  mrcsText:{
    fontFamily:Fonts.POPPINS_LIGHT,
    fontSize:14,
    color:white
  }
});

export default Header;
