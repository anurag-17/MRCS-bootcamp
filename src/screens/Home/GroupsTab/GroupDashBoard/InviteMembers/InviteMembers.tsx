import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DarkBlue, LightBlueADD, LightGrayColor, white} from '../../../../../theme/Colors';
import {AddMemberIcon, Cross, ShareLinkIcon} from '../../../../../assets/images';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Fonts from '../../../../../assets/Fonts';
import { Button } from 'react-native-ui-lib';

const InviteMembers = () => {
  const navigation = useNavigation() as NavigationProp<any>;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{alignSelf: 'center'}}>
          <Cross height={15}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('AddMembers')}>
            <Text style={styles.text_14_semi}>Add Members</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.mainContainer, {justifyContent: 'center'}]}>
        <AddMemberIcon style={{alignSelf: 'center',marginBottom:40}} />
        <Text style={[styles.text_16,{marginBottom:10}]}>Invite Members</Text>
        <Text style={[styles.text_14_light,{marginHorizontal:40,textAlign:'center'}]}>
          Suggest this group to new members with a shareable link.
        </Text>
        <View style={styles.inviteLinkRow}>
          <View style={{flexDirection:'row',}}>
            <Image source={ShareLinkIcon} style={styles.linkIcon}  />
            <Text style={styles.text_12_semi}>Invite link</Text>
          </View>
          <Button size={'xSmall'} label="Create" backgroundColor={DarkBlue} labelStyle={{color:white,fontSize:12,fontFamily:Fonts.POPPINS_MEDIUM,fontWeight:'600'}}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InviteMembers;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: Platform.OS === 'android' ? 35 : 0,
  },
  text_12_semi: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 12,
    alignSelf: 'center',
  },
  text_14_semi: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 14,
    alignSelf: 'center',
  },
  text_16: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 16,
    alignSelf: 'center',
  },
  text_14_light: {
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: 14,
    alignSelf: 'center',
  },
  inviteLinkRow: {
    backgroundColor: LightBlueADD,
    height: 40,
    marginTop: 30,
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:8,
    alignItems:'center',
    marginHorizontal:20,
    borderRadius:7
  },
  linkIcon:{
    height:20,
    width:20,
    alignSelf:'center',
    marginRight:8,
    tintColor:LightGrayColor
  }
});
