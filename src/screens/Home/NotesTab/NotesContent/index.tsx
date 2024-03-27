import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Chat, Eye, HeaderBell, HeaderChat, Heart} from '../../../../assets/images';
import {styles} from './styles';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import CustomButton from '../../../../components/CustomButton';
import NotesTopicItem from '../../../../components/NotesTopicItem';

const NotesContent = () => {
  const navigation = useNavigation() as NavigationProp<any>;
  const routes = useRoute();
  const {name} = routes?.params as RouteProp<any>

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={[
          'rgba(0, 0, 0, 0.49)',
          'rgba(0, 0, 0, 0.16)',
          'rgba(0, 0, 0, 0)',
          'rgba(0, 0, 0, 0.09)',
          'rgba(0, 0, 0, 0.49)',
        ]}
        style={styles.gradientContainer}>
        <StatusBar translucent backgroundColor={'rgba(0, 0, 0, 0.49)'} />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backArrowCircleButton}>
          <Image
            source={require('../../../../assets/images/backArrow.png')}
            style={styles.backArrow}
          />
        </TouchableOpacity>

        <Heart width={350} height={140} style={{alignSelf: 'center'}} />
        <Text style={styles.notesHeadingText}>{name ?? ''}</Text>
      </LinearGradient>
      <FlatList
        data={[1,2,3,4,5,6,7]}
        renderItem={()=><NotesTopicItem topicName={'Actinomycosis'} screenName={name ?? ''} viewCount={223} chatCount={0} />}

      />

    </View>
  );
};

export default NotesContent;
