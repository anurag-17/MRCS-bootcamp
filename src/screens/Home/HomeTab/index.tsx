import React from 'react';
import {
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BootCampRoundLogo,
  HeaderBell,
  HeaderChat,
  HomeLogo,
  Scissors,
} from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import {styles} from './style';
import {white} from '../../../theme/Colors';
import UpComingMock from '../../../components/UpComingMock';
import ItalicTagContainer from '../../../components/ItalicTagContainer';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const HomeTab = () => {
  const navigation = useNavigation() as NavigationProp<any>
  return (
    <View style={{flex: 1, backgroundColor: white}}>
      <FlatList
        ListHeaderComponent={() => (
          <Pressable style={{flex: 1, backgroundColor: white}} onPress={()=>navigation.navigate('AnnouncementsScreen')}>
            <Text style={styles.announceText}>Announcements</Text>
            <View style={styles.bootCampContiner}>
              <View style={styles.bootCampLogoContainer}>
                <BootCampRoundLogo style={styles.roundLogoIcon} />
                <View>
                  <Text style={styles.bootCampText}>Boot Camp</Text>
                  <Text style={styles.dayText}>{'5 days ago'}</Text>
                </View>
              </View>
              <Text style={styles.bootCampMockText}>
                {'Boot Camp Mock Recording'}
              </Text>
              <Text
                style={
                  styles.bootCampMockRecordingText
                }>{`Boot Camp Mock Recording is now available on App > Hub`}</Text>
            </View>
            <Image
              source={require('../../../assets/images/home/scissors.png')}
              style={styles.scissorsImage}
            />
            {/* <WelcomContainer /> */}
            <ItalicTagContainer 
            topText={'WELCOME'}
            tagText={'MRCS Boot Camp UK | London'}
            detailsText={`Welcome to the MRCS Boot Camp UK, an all-in-one solution for preparing for the MRCS Part B OSCE exam. Boot Camp Notes, Clinical Skills, Clinical Knowledge Courses, Online Mocks, Training Room and many more...`}
            />
            <PreviousContainer />
            <Image
              source={require('../../../assets/images/home/clockTower.png')}
              style={styles.clockTowerImage}
            />
            <Text style={styles.upcomingText}>Upcoming Mocks</Text>
          </Pressable>
        )}
        data={['', '', '']}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <UpComingMock
            day={'8'}
            month={'MAR'}
            dateTime={'Mar 8, 2024 | 16:00'}
            status={'Online'}
            isEnded={false}
            onPressDetails={()=>navigation.navigate('EventDetails')}
          />
        )}
        ListFooterComponent={() => (
          <View>
            <MembersContainer onPressMember={()=>navigation.navigate('MembersScreen')} />
          </View>
        )}
      />
    </View>
  );
};

const WelcomContainer = () => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeText}>WELCOME</Text>
      <Text style={styles.welcomeTagText}>MRCS Boot Camp UK | London</Text>
      <Text style={styles.welcomeDetailsText}>
        Welcome to the MRCS Boot Camp UK, an all-in-one solution for preparing
        for the MRCS Part B OSCE exam. Boot Camp Notes, Clinical Skills,
        Clinical Knowledge Courses, Online Mocks, Training Room and many more...
      </Text>
    </View>
  );
};

const PreviousContainer = () => {
  const navigation = useNavigation() as NavigationProp<any>

  return (
    <View style={styles.previousContainer}>
      <View style={styles.whatPreviousRow}>
        <Text style={styles.whatPreviousText}>
          {'What previous candidate said!'}
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Galleries')}>
          <Text style={styles.viewAllText}>{'View All'}</Text>
        </TouchableOpacity>
      </View>
      <Pressable onPress={()=>navigation.navigate('GalleryScreen')}>
        <View style={styles.multiImageContainer}>
          <View style={styles.firstImage} />
          <View style={styles.rightImageContainer}>
            <View style={styles.quarterImageContainer}>
              <View style={styles.quarterImage} />
              <View style={styles.quarterImage} />
            </View>
            <View style={styles.quarterImageContainer}>
              <View style={styles.quarterImage} />
              <View style={styles.quarterImage} />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const MembersContainer = ({onPressMember}:{onPressMember:()=>void}) => {
  return (
    <View style={styles.membersMainContainer}>
      <View style={styles.memberRow}>
        <Text style={[styles.membersNAllText, {color: 'black'}]}>
          {'Members'}
        </Text>
        <TouchableOpacity onPress={onPressMember}>
          <Text style={styles.membersNAllText}>{'See All'}</Text>
        </TouchableOpacity>
      </View>
      {/* <FlatList
          data={[1,2,3,4,5,6,7]}
          horizontal
          ItemSeparatorComponent={()=><View style={{width:10}}/>}
          renderItem = {()=>
              <TouchableOpacity>
              <View style={styles.roundProfileImage}/>
            </TouchableOpacity>
          }

          /> */}
      <View style={{flexDirection: 'row'}}>
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <TouchableOpacity key={index} onPress={onPressMember}>
            <View
              style={[
                styles.roundProfileImage,
                {marginLeft: index !== 0 ? 10 : 0},
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.numberOfMebersText}>
        {'1661 members including ALrazi Najm Al-deen, abashir and 3556793674'}
      </Text>
      <CustomButton
        textStyle={styles.inviteButtonTextStyle}
        buttonStyle={styles.inviteButtonStyle}
        title="Invite Members"
        validate={false}
        onPress={() => null}
      />
      <Text style={styles.questionText}>
        {'Do you have any questions? Feel free to contact us.'}
      </Text>
    </View>
  );
};

export default HomeTab;
