import React, {FC, ReactNode} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Fonts from '../../../../assets/Fonts';
import {white, DarkBlue, blueTypeTextColor} from '../../../../theme/Colors';
import Header from '../../../../components/Header';
import ShareSomething from '../../../../components/ShareSomething/ShareSomething';
import {
  InfoIcon,
  MediaIcon,
  MemberIcon,
  PinIcon,
} from '../../../../assets/images';
import GroupPost from '../../../../components/GroupPost/GroupPost';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const ViewGroups = () => {
  const navigation = useNavigation() as NavigationProp<any>
  const _gotoScreen = (screenName: string) => navigation.navigate(screenName);

  return (
    <View style={styles.mainContainer}>
      <Header
        type="centerTitle"
        imageUri="dfd"
        title={'July 2024 Exam Cohort'}
        titleStyle={styles.headerTitle}
        containerStyle={styles.headerStyle}
        onPressSettings={() => null}
      />

      <View style={styles.flexBtwn}>
        <TopIconButton
          title="Media"
          onPress={() => console.log('o ,,')}
          children={<MediaIcon style={styles.topButtonIcon} />}
        />
        <TopIconButton
          title="Files"
          onPress={() => console.log('o ,,')}
          children={<PinIcon style={styles.topButtonIcon} />}
        />
        <TopIconButton
          title="Members"
          onPress={() => _gotoScreen('MembersScreenTab')}
          children={<MemberIcon style={styles.topButtonIcon} />}
        />
        <TopIconButton
          title="About"
          onPress={() => console.log('o ,,')}
          children={<InfoIcon style={styles.topButtonIcon} />}
        />
      </View>
      <FlatList
        data={['']}
        ListHeaderComponent={() => (
          <ShareSomething
            onPhotoPress={() => {
              // Handle photo press
              null;
            }}
            onVideoPress={() => {
              // Handle video press
              null;
            }}
            onPollPress={() => {
              // Handle poll press
              null;
            }}
            onPressSomething={() => console.log('Share some.....')}
          />
        )}
        ListFooterComponent={()=><View style={{marginBottom:40}}/>}
        renderItem={() => (
          <>
            <GroupPost
              isPinned={true}
              isSubscription={true}
              onPressSeeMore={() => null}
              isSeeMore={true}
              name="Myat"
              dateText="2w ago"
              postText={`Hi @Everyone,
        \nHere's the list of exam dates and centres. This information is pusblished only here to facilitate practices among yourselves.`}
              onPressComment={() => console.log('cmnt')}
              imageUri="https://thumbs.dreamstime.com/b/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-107388687.jpg"
            />
            <GroupPost
              isSubscription={true}
              name="Dorean"
              dateText="2w ago"
              postText={`Pls who is taking the exam in June Cairo?`}
              onPressComment={() => console.log('cmnt')}
              imageUri="https://thumbs.dreamstime.com/b/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-107388687.jpg"
            />
            <GroupPost
              name="Boot camp"
              dateText="2w ago"
              postText="Welcome to the discussion! Connect with other guests and share ideas, thoughts, pictures & more. Have something to say? Leave a comment or share a post!"
              onPressComment={() => console.log('cmnt')}
            />
          </>
        )}
      />
    </View>
  );
};
interface TopIconButtonProps {
  title: string;
  onPress: () => void;
  children: ReactNode;
}
const TopIconButton: FC<TopIconButtonProps> = ({title, onPress, children}) => {
  return (
    <TouchableOpacity style={styles.topIconBtnStyle} onPress={onPress}>
      {children}
      <Text style={styles.topIconButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ViewGroups;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerTitle: {
    alignSelf: 'center',
    fontSize: 15,
    marginLeft: 10,
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
  flexBtwn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  topIconBtnStyle: {
    backgroundColor: DarkBlue,
    flexDirection: 'row',
    borderRadius: 50,
    height: 30,
  },
  topIconButtonText: {
    fontSize: 12,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: 'white',
    marginRight: 10,
    alignSelf: 'center',
  },
  topButtonIcon: {
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 5,
  },
});
