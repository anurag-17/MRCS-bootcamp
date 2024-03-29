import { TouchableOpacity, View, Image, Text, Platform, StyleSheet } from "react-native";
import Fonts from "../../assets/Fonts";
import { DarkBlue, LightGrayColor, blueTypeTextColor, grayEC, secondaryTextColor, white } from "../../theme/Colors";
import IconButton from "../IconButton";

interface MembersItemProps {
    name: string;
    imageUri?: boolean;
    onPress:()=>void;
    isFollow?:boolean;
    onPressFollow:()=>void;
    isSubscription?:boolean
  
  }
  
  const MembersItem: React.FC<MembersItemProps> = ({name, imageUri,onPress,onPressFollow,isFollow,isSubscription}) => {
    return (
      <TouchableOpacity style={styles.membersItemContainer} onPress={onPress}>
        <View style={styles.flexRow}>
          {imageUri ? (
            <Image style={styles.roundImage} />
          ) : (
            <View style={styles.roundImage}>
              <Text
                style={{
                  color: white,
                  fontFamily: Fonts.POPPINS_MEDIUM,
                  fontSize: 16,
                }}>
                {name.charAt(0)}
              </Text>
            </View>
          )}
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.nameText}>{name}</Text>
            <View style={[styles.flexRow]}>
              <Text style={styles.memberText}>{'Private member'}</Text>
              {!isSubscription &&<Text
                style={styles.lastSeenText}
                ellipsizeMode="tail"
                numberOfLines={1}>
                . Last seen Jan 4, 2023{' '}
              </Text>}
            </View>
            {isSubscription && (
              <IconButton
                isIcon
                title={'Part B Subscription'}
                isStar={true}
              />
            )}
          </View>
        </View>
        {isFollow == true && (
          <TouchableOpacity style={styles.followBtn} onPress={onPressFollow}>
            <Text style={[styles.nameText, {alignSelf: 'center'}]}>Follow</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  export default MembersItem

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: white,
    },
    headerTitle: {
      fontFamily: Fonts.POPPINS_MEDIUM,
      fontSize: 16,
      color: secondaryTextColor,
      marginLeft: 20,
      alignSelf: 'center',
    },
    headerStyle: {
      paddingHorizontal: 20,
      flexDirection: 'row',
      backgroundColor: white,
      paddingTop: Platform.OS == 'android' ? 25 : 40,
      height: Platform.OS == 'android' ? 90 : 100,
    },
    noMemberText:{
      marginTop:10,
      fontFamily:Fonts.POPPINS_REGULAR,
      color:LightGrayColor,
      alignSelf:'center',
      fontSize:14
    },
    membersItemContainer: {
      backgroundColor:white,
      paddingHorizontal: 20,
      paddingVertical:10,
      flexDirection: 'row',
      justifyContent:'space-between',
    },
    roundImage: {
      height: 50,
      width: 50,
      borderRadius: 50,
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: grayEC,
      justifyContent:'center',
      marginRight:15
    },
    flexRow:{
      flexDirection:'row'
    },
    nameText:{
      fontFamily:Fonts.POPPINS_SEMIBOLD,
      color:blueTypeTextColor,
      fontSize:14
    },
    memberText:{
      fontFamily:Fonts.POPPINS_MEDIUM,
      color:LightGrayColor,
      alignSelf:'center',
      fontSize:12
    },
    lastSeenText:{
      fontFamily:Fonts.POPPINS_LIGHT,
      color:LightGrayColor,
      alignSelf:'center',
      fontSize:12,
    },
    followBtn:{
      alignSelf:'center',
      height:40,
      width:60,
      justifyContent:'center'
    },
    br:{
      backgroundColor:grayEC,
      height:1,
      width:'78.5%',
      marginLeft:'auto'
    },
    sectionHeader: {
      backgroundColor: grayEC,
      paddingHorizontal: 20,
      fontFamily: Fonts.POPPINS_SEMIBOLD,
      color: LightGrayColor,
      fontSize: 12,
  },
  initialText: {
      color: white,
      fontFamily: Fonts.POPPINS_MEDIUM,
      fontSize: 16,
  },
  });
  