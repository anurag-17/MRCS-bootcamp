import React from 'react';
import { Platform,  StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import { DarkBlue, black, white } from '../../theme/Colors';
import { BootCampRoundLogo, Cross, Share, ThreeDots, WhiteBackArrow } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../assets/Fonts';

interface HeaderProps {
  title?: string;
  subTitle?:string
  isThreeDots?: boolean;
  isLogo?:boolean;
  isEdit?:boolean;
  containerStyle?:ViewStyle
  titleStyle?:TextStyle,
  type: "blue" | 'white';
  isShare?:boolean;
}

const Header: React.FC<HeaderProps> = ({
    type ='blue',
    title,
    subTitle,
    isThreeDots,
    isLogo,
    isEdit,
    containerStyle,
    titleStyle,
    isShare
    
}) => {
    const navigation = useNavigation() 

  if(type =='blue')
  return (
  <View style={[styles.mainContainer,containerStyle]}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{alignSelf:'center'}}>
        <WhiteBackArrow style={styles.backArrow}/>
        </TouchableOpacity>
        <View style={{marginLeft:30,alignSelf:'center'}}>
            <Text style={[styles.title,titleStyle]}>{title}</Text>
            <Text style={styles.mrcsText}>{subTitle}</Text>
        </View>
  </View>
  );
  else {
      return (
        <View
          style={[
            styles.whiteMainContainer,
            containerStyle,
          ]}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{alignSelf:'center'}}  onPress={() => navigation.goBack()}>
              <Cross height={14} style={styles.backArrow} />
            </TouchableOpacity>
            {isLogo && <BootCampRoundLogo style={{alignSelf:'center',marginLeft:20}} />}
            <Text style={[styles.title,{color:black},titleStyle]}>{title}</Text>
          </View>

          {isShare && (
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <Share height={16} width={16} style={{alignSelf: 'center'}} />
            </TouchableOpacity>
          )}
          {isThreeDots && (
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <ThreeDots height={16} width={16} style={{alignSelf: 'center'}} />
            </TouchableOpacity>
          )}
        </View>
      );
    };
  };

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor:DarkBlue,
    height:50,
  },
  whiteMainContainer:{
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor:white,
    justifyContent:'space-between',
    alignItems:'center'
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
