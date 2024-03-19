import React from 'react';
import {Text, TouchableOpacity, View, Image, FlatList} from 'react-native';
import {styles} from './styles';
  import {secondaryTextColor, yellow} from '../../../theme/Colors';
import {AddPost, Comment, Eye, EyeF, Filter, Like, Liked, Search, ThreeDots} from '../../../assets/images';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import PostContent from '../../../components/PostContent';

const ForumTab = () => {

  const navigation = useNavigation() as NavigationProp<any>
  return (
    <View style={styles.container}>
      <FlatList
      ListHeaderComponent={()=><>
      <View style={styles.firstRow}>
        <Text style={[styles.examNViewAllText, {color: secondaryTextColor}]}>
          {'General Discussion'}
        </Text>
        <TouchableOpacity>
          <Text style={styles.examNViewAllText}>{'Follow'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerLine} />
      <View style={styles.createPostContainer}>
        <View style={{flexDirection: 'row'}}>
          <AddPost style={styles.addPostIcon} />
          <Text style={[styles.examNViewAllText]}>{'Create New Post'}</Text>
        </View>
        <View style={styles.searchContainer}>
          <Search style={styles.searchIcon} />
        </View>
      </View>
      <View style={styles.fatDivider}/>
      <View style={[styles.rowSpaceBetween,{marginHorizontal:20}]}>
        <Text style={[styles.recentText]}>{'Recent activity'}</Text>
        <TouchableOpacity style={styles.filterContainer}>
          <Filter style={styles.filterIcon} />
          <Text style={[styles.recentText]}>{'Sort'}</Text>
        </TouchableOpacity>
      </View>
      </>}
      data={['']}
      renderItem={()=><>
       <PostContent
          name="Myat"
          subscription="6d - Part B Subscription"
          title="Anatomy Dissection Session"
          topic="Anatomy Dissection Session"
          invitationText="Myat is inviting you to schuduled Zoom meeting"
          timePlaceText="Time : Mar 2, 2024 08:00 London"
          likes={0} // Number of likes
          comments={0} // Number of comments
          onPostPress={()=>navigation.navigate('ForumPost')}
          isShare={false}
          isPostScreen={false}
        />
        <PostContent
          name="Myat"
          subscription="6d - Part B Subscription"
          title ="Anatomy Dissection Session"
          topic="Anatomy Dissection Session"
          invitationText=""
          timePlaceText="Time : Mar 2, 2024 08:00 London"
          likes={0} // Number of likes
          comments={0} // Number of comments
          onPostPress={()=>navigation.navigate('ForumPost')}
        />
    </>}
      />
    </View>
  );
};

interface PostContentdProps {
  name: string; // Name of the poster
  subscription: string; // Subscription information
  topic: string; // Topic of the post
  title:string; // Title of the post
  invitationText: string; // Invitation message
  timePlaceText: string; // Text representing time and place
  likes: number; // Number of likes
  comments: number; // Number of comments
  onPostPress:()=>void
}

const PostContentd: React.FC<PostContentdProps> = ({
  name,
  subscription,
  topic,
  title,
  invitationText,
  timePlaceText,
  likes,
  comments,
  onPostPress
}) => {
  return (
    <View style={styles.postContainer}>
      <View style={[styles.rowSpaceBetween, {marginVertical: 15}]}>
        <View style={styles.profileContainer}>
          <Image style={styles.profiPicBig} source={{uri: 'dfd'}} />
          <View>
            {/* NameText */}
            <Text style={[styles.recentText, {marginVertical: 0}]}>{name}</Text>
            {/* DayMonthText */}
            <Text style={[styles.text13medium]}>{subscription}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <ThreeDots style={styles.threeDots} />
        </TouchableOpacity>
      </View>
      {/* TitleText */}
      <Text style={[styles.text18semi]}>{title}</Text>
      {/* Topic Text */}
      {/* inVitingText */}
      <TouchableOpacity style={{marginTop: 15}} onPress={onPostPress}>
        <Text style={[styles.text13light]}>{invitationText}</Text>
        <Text style={[styles.text13light]}>{`Title : ${topic}`}</Text>
        <Text style={[styles.text13light]}>
          {timePlaceText} {invitationText && ' . . .'}
        </Text>
        {!invitationText && <Text style={[styles.text13light]}>{`. . .`}</Text>}
      </TouchableOpacity>

      {/* Time Place Text */}
      <View style={styles.reactionRow}>
        <View
          style={[
            styles.rowSpaceBetween,
            {width: '40%', alignItems: 'center', alignContent: 'center'},
          ]}>
          <View style={styles.rowSpaceBetween}>
            {likes >0 ? <Liked style={styles.likeIcon} />:<Like style={styles.likeIcon} />}
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
        <View style={styles.rowSpaceBetween}>
          <TouchableOpacity>
            <Image style={styles.smallProfilePic} />
          </TouchableOpacity>
          <Text style={[styles.text14popMedium]}>{`1m`}</Text>
        </View>
      </View>
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
          <Comment style={styles.commentIcon} />
          <Text style={[styles.text14popMedium]}>{'Comment'}</Text>
        </View>
      </View>
    </View>
  );
};

export default ForumTab;
