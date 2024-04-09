import React, {FC, ReactNode} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../../../../components/Header';
import Fonts from '../../../../assets/Fonts';
import {
  white,
  DarkBlue,
  gray8E,
  grayD9,
  grayF1,
  LightBlueADD,
  LightGrayColor,
  grayEC,
  blueTypeTextColor,
  grayE8EB,
  secondaryTextColor,
} from '../../../../theme/Colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import LeftRightText from '../../../../components/LeftRightText';
import {Avatar, Chip} from 'react-native-ui-lib';
import {
  AddPlus,
  BootCampRoundLogo,
  Clock,
  EditPencil,
  PadLock,
  VisibleEye,
} from '../../../../assets/images';

const AboutGroup = () => {
  const navigation = useNavigation() as NavigationProp<any>;
  return (
    <View style={styles.mainContainer}>
      <Header
        type="blue"
        title={'May- June 2024 Exam Cohort'}
        containerStyle={[styles.headerStyle]}
        subTitle={'MRCS Boot Camp UK'}
      />
      <ScrollView>
        <ImageBackground
          style={styles.groupsBgImage}
          source={require('../../../../assets/images/group/group.png')}></ImageBackground>
        <View style={[styles.innerContainer]}>
          <View style={styles.memberContainer}>
            <LeftRightText
              leftText="Members"
              letfTextStyle={styles.leftText}
              rightTextStyle={styles.rightText}
              onPressAll={() => null}
              rightText="See All"
              containerStyle={{marginTop: 25}}
            />
            <View style={[styles.flexRow, , {marginVertical: 20}]}>
              <Avatar
                size={34}
                backgroundColor={grayEC}
                label="A"
                labelColor="white"
              />
              <Avatar
                size={34}
                backgroundColor={grayEC}
                containerStyle={{marginLeft: -10}}
                label="A"
                labelColor="white"
              />
              <Avatar
                size={34}
                backgroundColor={grayEC}
                containerStyle={{marginLeft: -10}}
                label="A"
                labelColor="white"
              />
              <Avatar
                size={34}
                backgroundColor={grayEC}
                label="A"
                containerStyle={{marginLeft: -10}}
                labelColor="white"
              />
              <Avatar
                size={34}
                backgroundColor={LightGrayColor}
                containerStyle={{marginLeft: -10}}
                label="+30"
                labelColor="white"
              />
              <Text style={styles.membersNumber}>34 Members</Text>
            </View>
            <Chip
              iconSource={AddPlus}
              onPress={() => console.log('dd')}
              iconStyle={{
                tintColor: DarkBlue,
                height: 13,
                width: 13,
                alignSelf: 'center',
              }}
              style={styles.chipStyle}
              labelStyle={styles.chipLable}
              label="Invite Members"
            />
          </View>
          <View style={styles.welcomeContainer}>
            <Text style={[styles.text_14_Light, {marginVertical: 20}]}>
              Welcom to the group! You can connect wiht other members, get
              updates and share videos.
            </Text>
            <Chip
              iconSource={EditPencil}
              onPress={() => console.log('dd')}
              iconStyle={{
                tintColor: DarkBlue,
                height: 10,
                width: 10,
                alignSelf: 'center',
              }}
              style={styles.chipStyle}
              labelStyle={styles.chipLable}
              label="Edit Description"
            />
          </View>
        </View>

        <IconRow
          title="Private Group"
          subtitle="Only approved members can view this group"
          image={
            <Image
              source={PadLock}
              style={styles.iconStyle}
              resizeMode="contain"
            />
          }
        />

        <IconRow
          title="Visible"
          subtitle="Shown to site visitors"
          image={
            <Image
              source={VisibleEye}
              style={[styles.iconStyle]}
              resizeMode="contain"
            />
          }
        />
        <IconRow
          title="Created 29/12/2023"
          image={
            <Image
              source={Clock}
              style={[styles.iconStyle,{alignSelf:'flex-start',height:18}]}
              resizeMode="contain"
            />
          }
        />
        <View style={styles.iconRow}>
          <BootCampRoundLogo/>
          <View style={{marginLeft:20}}>
            <Text style={styles.text_14_Light}>Group Created by</Text>
            <Text style={[styles.text_14_Light,{fontSize:13,fontFamily:Fonts.POPPINS_SEMIBOLD,color:LightGrayColor}]}>Boot Camp</Text>
          </View>
        </View>
        <View style={styles.activityBox}>
        <Text style={[styles.text_12_Regular_secondary,{marginVertical:10,marginLeft:10}]}>{'Group Activity: '}
          <Text style={styles.numberText}>In the last 30 days</Text>
        </Text>
        <View style={styles.dividerLine}/>
          <View style={styles.activityRow}>
            <View>
                <Text style={[styles.numberText,{fontSize:18,alignSelf:'center'}]}>3</Text>
                <Text style={styles.text_12_Regular_secondary}>New Post</Text>
            </View>
            <View style={styles.verticalLine}/>
            <View>
                <Text style={[styles.numberText,{fontSize:18,alignSelf:'center'}]}>11</Text>
                <Text style={styles.text_12_Regular_secondary}>New Members</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
interface IconRowProps {
  title: string;
  subtitle?: string;
  image: ReactNode;
}

const IconRow: FC<IconRowProps> = ({title, subtitle, image}) => {
  return (
    <View style={styles.iconRow}>
      {image}
      <View style={{alignSelf:'center'}}>
        <Text style={styles.text_14_Light}>{title}</Text>
        <Text style={styles.text_12_Light}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default AboutGroup;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerStyle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: DarkBlue,
    paddingTop: Platform.OS == 'android' ? 25 : 40,
    height: Platform.OS == 'android' ? 90 : 100,
  },
  headerTitle: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
    color: DarkBlue,
    marginLeft: 10,
    alignSelf: 'center',
  },
  groupsBgImage: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 4,
    overflow: 'hidden',
  },
  innerContainer: {
    marginBottom: 20,
  },
  memberContainer: {
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: grayE8EB,
  },

  leftText: {
    fontSize: 18,
    color: DarkBlue,
  },
  rightText: {
    color: DarkBlue,
  },
  flexRow: {
    flexDirection: 'row',
  },
  iconRow: {
    flexDirection: 'row',
    marginBottom:15,
    paddingHorizontal:20
  },
  membersNumber: {
    marginLeft: 30,
    color: blueTypeTextColor,
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: 14,
    alignSelf: 'center',
  },
  chipStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: DarkBlue,
    height: 27,
    width: 150,
    borderRadius: 50,
    justifyContent: 'center',
    marginBottom: 20,
  },
  chipLable: {
    alignSelf: 'center',
    color: DarkBlue,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  welcomeContainer: {
    borderBottomWidth: 1,
    borderColor: grayE8EB,
    paddingHorizontal: 20,
  },
  text_14_Light: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_LIGHT,
    color: secondaryTextColor,
  },
  text_12_Light: {
    fontSize: 12,
    fontFamily: Fonts.POPPINS_LIGHT,
    color: LightGrayColor,
  },
  text_12_Regular_secondary: {
    fontSize: 12,
    fontFamily: Fonts.POPPINS_LIGHT,
    color: secondaryTextColor,
  },
  numberText: {
    fontSize: 12,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: secondaryTextColor,
  },
  iconStyle: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginRight:20
  },
  activityBox:{
    borderRadius:5,
    borderWidth:1,
    borderColor:grayE8EB,
    marginVertical:30,
    marginHorizontal:20,
    paddingBottom:20,
  },
  dividerLine:{
    height:1,
    width:'auto',
    backgroundColor:grayE8EB
  },
  verticalLine:{
    width:2,
    height:40,
    backgroundColor:grayE8EB
  },
  activityRow:{
    marginHorizontal:40,
    justifyContent:'space-between',
    flexDirection:'row',
    marginTop:20
  }
});
