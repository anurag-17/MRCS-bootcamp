import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Chat, Eye } from '../../assets/images';
import CustomButton from '../CustomButton';
import { DarkBlue, dividerLineColor, quarternaryTextColor, tertiaryTextColor, white } from '../../theme/Colors';
import Fonts from '../../assets/Fonts';

interface TopicProps {
  viewCount: number;
  chatCount: number;
  topicName: string;
  screenName: string;
  onPress?:()=>void;
}

const NotesTopicItem: React.FC<TopicProps> = ({
  viewCount,
  chatCount,
  topicName,
  screenName,
  onPress
}) => {
  return (
    <View style={styles.topicContainer}>
      <Text style={styles.screenNameText}>{screenName}</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <Text style={styles.topicText}>{topicName}</Text>
      <CustomButton
        buttonStyle={styles.exclusiveButton}
        textStyle={styles.exclusiveText}
        onPress={() => null}
        title="Exclusive"
        validate={false}
      />
      <View style={styles.bottomView}>
        <View style={styles.eyeIconRow}>
          <Eye style={styles.icon} />
          <Text style={styles.countText}>{viewCount}</Text>
        </View>
        <View style={styles.chatIconRow}>
          <Chat style={styles.icon} />
          <Text style={styles.countText}>{chatCount}</Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default NotesTopicItem;


const styles = StyleSheet.create({
    topicContainer: {
      borderBottomWidth: 1,
      borderBottomColor: dividerLineColor,
    },
    screenNameText: {
      color: DarkBlue,
      fontFamily: Fonts.POPPINS_SEMIBOLD,
      fontSize: 12,
      marginLeft: 20,
      marginVertical: 5,
      lineHeight: 22,
    },
    topicText: {
      color: tertiaryTextColor,
      fontFamily: Fonts.POPPINS_BOLD,
      fontSize: 15,
      marginLeft: 20,
      lineHeight: 22,
    },
    exclusiveButton: {
      color: tertiaryTextColor,
      backgroundColor: tertiaryTextColor,
      height: 24,
      borderRadius: 4,
      marginTop: 10,
      alignSelf: 'flex-start',
      marginLeft: 20,
      width: 69,
      paddingHorizontal: 0,
    },
    exclusiveText: {
      fontFamily: Fonts.POPPINS_SEMIBOLD,
      color: white,
      fontSize: 12,
      borderWidth: 1,
    },
    bottomView: {
      flexDirection: 'row',
      marginVertical: 20,
      marginBottom: 15,
      marginLeft: 20,
    },
    eyeIconRow: {
      flexDirection: 'row',
      marginRight: 25,
    },
    chatIconRow: {
      flexDirection: 'row',
    },
    icon: {
      height: 18,
      width: 18,
      marginRight: 5,
    },
    countText: {
      color: quarternaryTextColor,
      fontSize: 11,
      fontFamily: Fonts.POPPINS_REGULAR,
    },
  });
