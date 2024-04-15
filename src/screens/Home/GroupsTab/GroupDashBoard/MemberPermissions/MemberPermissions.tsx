import React, { useState } from 'react';
import {View, StyleSheet, Platform, Text, } from 'react-native';
import Fonts from '../../../../../assets/Fonts';
import {DarkBlue, grayE8EB, secondaryTextColor, white} from '../../../../../theme/Colors';
import Header from '../../../../../components/Header';
import { RadioButton, RadioGroup, Switch } from 'react-native-ui-lib';

const MemberPermissions = () => {
const [showList, setShowList] = useState(true);
const [inviteChoice,setInviteChoice] = useState('inviteAll')
const [memberChoice,setMemberChoice] = useState('')
const [postChoice,setPostChoice] = useState('')
  return (
    <View style={styles.mainContainer}>
      <Header
        type="blue"
        title={'Member Permissions'}
        titleStyle={styles.headerTitle}
        containerStyle={styles.headerStyle}
      />
      <View style={styles.topView}>
        <View>
          <Text style={styles.text13RegSecondary}>Member List</Text>
          <Text style={styles.text12LightSecondary}>
            Show the memeber list to all group members.
          </Text>
        </View>
        <Switch
          value={showList}
          onValueChange={() => setShowList(!showList)}
          onColor={DarkBlue}
          offColor={'rgba(0,33,71,0.1)'}
        />
      </View>
      <View style={styles.choiceContainer}>
        <Text style={styles.text13SemiSecondary}>Invite</Text>
        <Text style={[styles.text12LightSecondary,{marginBottom:10,marginTop:2}]}>
          Who can invite other to join this group?
        </Text>
        <RadioGroup  initialValue={inviteChoice} onValueChange={setInviteChoice} style={{justifyContent:'space-between'}}>
          <RadioButton contentOnLeft containerStyle={styles.contentOnLeft}   value={'inviteAll'} label={'All group members'} labelStyle={styles.text13LightSecondary} color={DarkBlue}/>
          <RadioButton contentOnLeft containerStyle={styles.contentOnLeft} value={'inviteGroupAdmins'} label={'Group admins'} labelStyle={styles.text13LightSecondary} color={DarkBlue} />
          <RadioButton contentOnLeft containerStyle={styles.contentOnLeft} value={'inviteSiteAdmins'} label={'Site admins'} labelStyle={styles.text13LightSecondary} color={DarkBlue} />
        </RadioGroup>
      </View>
      {
        inviteChoice!='inviteSiteAdmins'&&
        <View style={styles.choiceContainer}>
        <Text style={styles.text13SemiSecondary}>Add members</Text>
        <Text style={[styles.text12LightSecondary,{marginBottom:10,marginTop:2}]}>
          Who can add site members to this group?
        </Text>
        <RadioGroup  initialValue={inviteChoice} onValueChange={setMemberChoice} style={{justifyContent:'space-between'}}>
          <RadioButton contentOnLeft containerStyle={styles.contentOnLeft}   value={'addAll'} label={'All group members'} labelStyle={styles.text13LightSecondary} color={DarkBlue}/>
          <RadioButton contentOnLeft containerStyle={styles.contentOnLeft} value={'addGroupAdmins'} label={'Group admins'} labelStyle={styles.text13LightSecondary} color={DarkBlue} />
          <RadioButton contentOnLeft containerStyle={styles.contentOnLeft} value={'addSiteAdmins'} label={'Site admins'} labelStyle={styles.text13LightSecondary} color={DarkBlue} />
        </RadioGroup>
      </View>}
      <View style={[styles.choiceContainer,{borderBottomWidth:0}]}>
        <Text style={styles.text13SemiSecondary}>Post</Text>
        <Text style={[styles.text12LightSecondary,{marginBottom:10,marginTop:2}]}>
          Who can post in this group?
        </Text>
        <RadioGroup  initialValue={inviteChoice} onValueChange={setPostChoice} style={{justifyContent:'space-between'}}>
          <RadioButton contentOnLeft containerStyle={styles.contentOnLeft}   value={'postAll'} label={'All group members'} labelStyle={styles.text13LightSecondary} color={DarkBlue}/>
          <RadioButton contentOnLeft containerStyle={styles.contentOnLeft} value={'postGroupAdmins'} label={'Group admins'} labelStyle={styles.text13LightSecondary} color={DarkBlue} />
          <RadioButton contentOnLeft containerStyle={styles.contentOnLeft} value={'postSiteAdmins'} label={'Site admins'} labelStyle={styles.text13LightSecondary} color={DarkBlue} />
        </RadioGroup>
      </View>
    </View>
  );
};

export default MemberPermissions;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerTitle: {
    alignSelf: 'center',
    marginTop: Platform.OS == 'ios' ? 15 : 20,
    fontSize: 15,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
  },
  headerStyle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: DarkBlue,
    paddingTop: Platform.OS == 'android' ? 25 : 40,
    height: Platform.OS == 'android' ? 90 : 100,
  },
  topView:{
    flexDirection:'row',justifyContent:'space-between',
    padding:15,
    paddingHorizontal:20,
    borderBottomWidth:8,
    borderColor:grayE8EB
  },
  text13RegSecondary: {
    fontSize: 13,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: secondaryTextColor,
  },
  contentOnLeft: {
    justifyContent: 'space-between',
    marginBottom:15
  },
  text13SemiSecondary: {
    fontSize: 13,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: secondaryTextColor,
  },
  text12LightSecondary: {
    fontSize: 12,
    fontFamily: Fonts.POPPINS_LIGHT,
    color: secondaryTextColor,
  },
  text13LightSecondary: {
    fontSize: 13,
    fontFamily: Fonts.POPPINS_LIGHT,
    color: secondaryTextColor,
  },
  text14SemiP: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: secondaryTextColor,
  },
  choiceContainer:{
    borderBottomWidth:8,
    borderColor:grayE8EB,
    paddingHorizontal:20,
    paddingTop:15
  }
});
