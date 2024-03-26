import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  Comment,
  CommentBlank,
  EyeF,
  Like,
  Liked,
  Share,
  ThreeDots,
} from '../../assets/images';
import {
  LightGrayColor,
  black11,
  grayE8,
  grayEC,
  grayOuterLine,
  secondaryTextColor,
  white,
  yellow,
} from '../../theme/Colors';
import Fonts from '../../assets/Fonts';

interface PostContentProps {
  name: string; // Name of the poster
  subscription: string; // Subscription information
  topic: string; // Topic of the post
  title: string; // Title of the post
  invitationText: string; // Invitation message
  timePlaceText: string; // Text representing time and place
  likes: number; // Number of likes
  comments: number; // Number of comments
  onPostPress?: () => void;
  isShare?: boolean;
  meetingId?: string;
  passCode?: string;
  zoomUrl?: string;
  onPressShare?: () => void;
  isPostScreen?:boolean
  onProfilePress?:()=>void;
}

const PostContent: React.FC<PostContentProps> = ({
  name,
  subscription,
  topic,
  title,
  invitationText,
  timePlaceText,
  likes,
  comments,
  onPostPress,
  isShare,
  meetingId,
  passCode,
  zoomUrl,
  onPressShare,
  isPostScreen,
  onProfilePress
}) => {
  return (
    <View style={styles.postContainer}>
      <Pressable onPress={onPostPress}>
        <View style={[styles.rowSpaceBetween, {marginVertical: 15}]}>
          <Pressable style={styles.profileContainer} onPress={onProfilePress}>
            
            <Image style={styles.profiPicBig} source={{uri: 'dfd'}} />
            <View>
              {/* NameText */}
              <Text style={[styles.recentText, {marginVertical: 0}]}>{name}</Text>
              {/* DayMonthText */}
              <Text style={[styles.text13medium]}>{subscription}</Text>
            </View>
          </Pressable>
          <TouchableOpacity>
            <ThreeDots style={styles.threeDots} />
          </TouchableOpacity>
        </View>
        {/* TitleText */}
        <Text style={[styles.text18semi]}>{title}</Text>
        {/* Topic Text */}
        {/* inVitingText */}
        <View style={{marginTop: 15}}>
          <Text style={[styles.text13light]}>{invitationText}</Text>
          <Text style={[styles.text13light]}>{`Topic : ${topic} ${
            invitationText && isPostScreen? '' : ' . . .'
          }`}</Text>

          {isPostScreen|| !invitationText  ? (
            <Text style={[styles.text13light]}>{timePlaceText}</Text>
          ):null}
          {!invitationText && !isPostScreen && <Text style={[styles.text13light]}>{`. . .`}</Text>}
        </View>
        {zoomUrl &&  
        <View style={{marginTop:15}}>
        <Text style={[styles.text13light]}>{'Join Zoom Meeting'}</Text>
        <Text style={[styles.text13light,{textDecorationLine:'underline',marginTop:4}]}>{zoomUrl}</Text>
        </View>
        }
         {meetingId &&  
        <View style={{marginTop:15}}>
        <Text style={[styles.text13light]}>{`Meeting ID: ${meetingId}`}</Text>
        <Text style={[styles.text13light,{marginTop:4}]}>{`Passcode: ${passCode}`}</Text>
        </View>
        }

        {/* Time Place Text */}
        <View style={styles.reactionRow}>
          <View
            style={[
              styles.rowSpaceBetween,
              {width: '40%', alignItems: 'center', alignContent: 'center'},
            ]}>
            <View style={styles.rowSpaceBetween}>
              {likes > 0 ? (
                <Liked style={styles.likeIcon} />
              ) : (
                <Like style={styles.likeIcon} />
              )}
              {/* LikeNumberText */}
              <Text style={[styles.text14popMedium]}>{likes}</Text>
            </View>
            <View style={styles.rowSpaceBetween}>
              <Comment style={styles.commentIcon} />
              {/* CommentNubmerText */}
              <Text style={[styles.text14popMedium]}>{comments}</Text>
            </View>
            <View style={styles.rowSpaceBetween}>
              <EyeF style={styles.eyeIcon} />
              {/* ViewsNumberText */}
              <Text style={[styles.text14popMedium]}>{'0'}</Text>
            </View>
          </View>
          <View style={[styles.rowSpaceBetween, {justifyContent: 'center'}]}>
            {isShare ? (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPressShare}
                style={{alignSelf: 'center'}}>
                <Share height={16} width={16} />
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity>
                  <Image style={styles.smallProfilePic} />
                </TouchableOpacity>
                <Text style={[styles.text14popMedium]}>{`1m`}</Text>
              </>
            )}
          </View>
        </View>
      </Pressable>
      <View style={styles.grayDivider} />
      <View
        style={[
          styles.rowSpaceBetween,
          {marginVertical: 15, justifyContent: 'space-around'},
        ]}>
        <View style={{flexDirection: 'row'}}>
          {true ? (
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <Liked style={styles.likeIcon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <Like style={styles.likeIcon} />
            </TouchableOpacity>
          )}
          <Text style={[styles.text13semi, true ? {color: yellow} : {}]}>
            {'Like'}
          </Text>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.rowSpaceBetween}>
          <CommentBlank style={styles.commentIcon} />
          <Text style={[styles.text14popMedium]}>{'Comment'}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostContent;

const styles = StyleSheet.create({
  postContainer: {
    borderBottomColor: grayEC,
    borderBottomWidth: 8,
    paddingHorizontal: 20,
    backgroundColor: white,
  },
  fatDivider: {
    backgroundColor: grayEC,
    height: 8,
    marginVertical: 7,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentText: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 14,
    color: secondaryTextColor,
    marginVertical: 14,
  },
  text13light: {
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: 13,
    color: secondaryTextColor,
  },
  text13medium: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 13,
    color: LightGrayColor,
  },
  text13semi: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 13,
    color: LightGrayColor,
    alignSelf: 'center',
  },
  text18semi: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 18,
    color: black11,
  },
  filterContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  filterIcon: {
    height: 15,
    width: 19,
    alignSelf: 'center',
    marginRight: 10,
  },
  profileContainer: {
    flexDirection: 'row',
  },

  profiPicBig: {
    height: 37,
    width: 37,
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
  grayDivider: {
    backgroundColor: grayOuterLine,
    height: 1,
    marginTop: 15,
  },
  verticalLine: {
    backgroundColor: grayOuterLine,
    height: 31,
    width: 1,
  },
  likeIcon: {
    height: 16,
    width: 17,
    alignSelf: 'center',
    marginRight: 5,
  },
  commentIcon: {
    height: 10,
    width: 16,
    alignSelf: 'center',
    marginRight: 5,
  },
  eyeIcon: {
    height: 16,
    width: 17,
    alignSelf: 'center',
    marginRight: 5,
  },
  smallProfilePic: {
    height: 19,
    width: 19,
    alignSelf: 'center',
    backgroundColor: grayE8,
    borderRadius: 50,
    marginRight: 5,
  },
  text14popMedium: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 14,
    color: LightGrayColor,
    alignSelf: 'center',
    marginRight: 5,
  },
  likeCommentRow: {
    justifyContent: 'space-between',
  },
});
