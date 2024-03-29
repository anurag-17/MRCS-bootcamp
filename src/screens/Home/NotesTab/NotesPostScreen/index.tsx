import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';

import Header from '../../../../components/Header';
import {
  Chat,
  Eye,
  ForwardArrow,
  Share,
  Thoughts,
} from '../../../../assets/images';
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { styles } from './styles';
import { DarkBlue } from '../../../../theme/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const QUESTIONS = [
  {
    question: 'Anterior abdominal wall muscles',
  },
  {
    question: 'Iliohypogastric nerve',
  },
  {
    question: 'Ilioinguinal nerve',
  },
  {
    question: 'Meckel diverticulum',
  },
  {
    question: 'Referred pain',
  },
];

const NotesPostScreen = () => {
  const [toggle, setToggle] = useState(false);
  const navigation = useNavigation() as NavigationProp<any>;
  const route = useRoute();

  return (

    <ScrollView style={styles.mainContainer}>
          <KeyboardAwareScrollView>

      <StatusBar translucent backgroundColor={DarkBlue} />
      <Header
        type="blue"
        title={'Post'}
        titleStyle={{alignSelf: 'center', marginTop: 15}}
        containerStyle={styles.headerStyle}
        isThreeDots={true}
      />
      {/* Post section */}
      <View style={styles.postContainer}>
        <Text style={styles.topicText}>{'Anterior Abdominal Wall'}</Text>
        <View style={styles.exclusiveButton}>
          <Text style={styles.exclusiveText}>Exclusive</Text>
        </View>
        <Text style={styles.dateText}>Updated: Jul 21, 2023</Text>
        <View style={styles.borderLeftView}>
          <Text style={styles.paraText}>
            {
              'A 65-year-old gentleman presented with swelling in the groin. You will be asked a series of questions related to this scenario.'
            }
          </Text>
        </View>
        <View style={styles.bulletListContainer}>
          {QUESTIONS.map((item, index) => {
            return (
              <View style={styles.pointsView} key={index}>
                <ForwardArrow
                  style={styles.forwardIcon}
                  height={11}
                  width={11}
                />
                <Text style={styles.paraText}>{item.question}</Text>
              </View>
            );
          })}
        </View>
        <Text style={styles.subjectText}>Surgical Anatomy</Text>
        <View style={styles.bottomView}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.eyeIconRow}>
              <Eye style={styles.icon} />
              <Text style={styles.countText}>{20}</Text>
            </View>
            <View style={styles.chatIconRow}>
              <Chat style={styles.icon} />
              <Text style={styles.countText}>{0}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => console.log('share..')}>
            <Share />
          </TouchableOpacity>
        </View>
      </View>
      {/* Comment section */}
      <View>
        <Thoughts height={61} width={106} style={styles.thoughtsIcons} />
        <Text style={styles.shareThoughts}>Share Your Thoughts</Text>
        <Text style={styles.beTheFirst}>Be the first to comment.</Text>
          <View style={styles.commentBox}>
            <View style={styles.profileBox}>
              <Text style={styles.singleletter}>A</Text>
            </View>

            <TextInput
              placeholder="Write a comment"
              placeholderTextColor={'black'}
              onChangeText={txt => console.log(txt)}
              style={styles.commentInput}
            />
          </View>
      </View>
      </KeyboardAwareScrollView>

    </ScrollView>

  );
};

export default NotesPostScreen;

