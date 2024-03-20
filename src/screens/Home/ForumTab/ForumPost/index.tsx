import React from 'react'
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { DarkBlue, LightGrayColor, grayE8, grayEC, grayLightBlue, secondaryTextColor, white } from '../../../../theme/Colors'
import Header from '../../../../components/Header'
import PostContent from '../../../../components/PostContent'
import Fonts from '../../../../assets/Fonts'
import { ThreeDots } from '../../../../assets/images'

const ForumPost = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <StatusBar translucent backgroundColor={DarkBlue} />
        <Header
          type='blue'
          title={'Post'}
          containerStyle={styles.headerStyle}
          subTitle={'MRCS Boot Camp UK'}
        />
        <PostContent
          name="Myat"
          subscription="6d - Part B Subscription"
          title="Anatomy Dissection Session"
          topic="Anatomy Dissection Session"
          invitationText="Myat is inviting you to schuduled Zoom meeting"
          timePlaceText="Time : Mar 2, 2024 08:00 London"
          likes={0} // Number of likes
          comments={0} // Number of comments
          // onPostPress={()=>console.log('presabe')}
          meetingId={'858 884 349 849'}
          passCode={'bootcampuk'}
          zoomUrl={
            'https://web.zoom.uk/858884349849?pwd=SGbzoIDmvmcIINMllccsrac'
          }
          isShare={true}
          onPressShare={() => console.log('open share sheet')}
          isPostScreen={true}
        />
        <View style={styles.commentRow}>
          <Text style={styles.commentText}>{'1 Comment'}</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              activeOpacity={0.9}
              onPress={() => null}>
              <Text style={styles.commentText}>{'Newest'}</Text>
            </TouchableOpacity>
            <Image
              resizeMode="contain"
              style={styles.downArrow}
              source={require('../../../../assets/images/arrowDown.png')}
            />
          </View>
        </View>
        <View>
          <View style={[styles.commentedRow]}>
            <View style={styles.profileContainer}>
              <Image style={styles.commentProfile} source={{uri: 'dfd'}} />
              <View>
                {/* NameText */}
                <Text style={[styles.profileNameText, {marginVertical: 0}]}>
                  {'Name'}
                </Text>
                {/* DayMonthText */}
                <Text style={[styles.text13medium]}>
                  {'1 hr . Part B Subscription'}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <ThreeDots style={styles.threeDots} />
            </TouchableOpacity>
          </View>
          <View style={styles.commentTextContainer}>
            <Text style={styles.text13Regular}>{'Ok'}</Text>
          </View>
        </View>
      </View>
    </>
  );
}



export default ForumPost

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:white
    },
    headerStyle:{
        paddingHorizontal: 20,
        flexDirection: 'row',
        backgroundColor:DarkBlue,
        paddingTop:Platform.OS=='android'? 25:40,
        height:Platform.OS=='android'?90:100,
    },
    commentRow:{
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        borderBottomWidth:1,
        borderBottomColor:grayE8,
        height:50,

    },
    commentText:{
        fontSize:14,
        fontFamily:Fonts.POPPINS_SEMIBOLD,
        color:DarkBlue,
        alignSelf:'center'
    },
    downArrow:{
        marginLeft:10,
        height:16,
        width:16,
        alignSelf:'center'
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      commentedRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal:20,
        marginTop:15
      },
      profileContainer: {
        flexDirection: 'row',
      },
    
      commentProfile: {
        height: 28,
        width: 28,
        borderRadius: 50,
        alignSelf: 'center',
        backgroundColor: grayE8,
        marginRight: 15,
      },
      threeDots: {
        width: 3.6,
        height: 16,
        alignSelf: 'center',
      },
      reactionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
      }, 
      profileNameText: {
        fontFamily: Fonts.POPPINS_MEDIUM,
        fontSize: 13,
        color: secondaryTextColor,
        marginVertical: 14,
      },
      text13medium: {
        fontFamily: Fonts.POPPINS_MEDIUM,
        fontSize: 13,
        color: LightGrayColor,
      },
      text13Regular: {
        fontFamily: Fonts.POPPINS_REGULAR,
        fontSize: 13,
        color: DarkBlue,
      },
      commentTextContainer:{
        marginTop:10,
        marginLeft:60,
        marginRight:20,
        backgroundColor:grayEC,
        borderRadius:5,
        paddingLeft:10,
        paddingVertical:10
    }
})