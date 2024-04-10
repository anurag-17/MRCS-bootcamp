import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {white} from '../../../../../theme/Colors';
import {AddMemberIcon, Cross} from '../../../../../assets/images';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Fonts from '../../../../../assets/Fonts';

const AddMembers = () => {
  const navigation = useNavigation() as NavigationProp<any>;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{alignSelf: 'center'}}>
          <Cross height={15}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.text_14_semi}>Add Members</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.mainContainer, {justifyContent: 'center'}]}>
        <AddMemberIcon style={{alignSelf: 'center'}} />
        <Text style={styles.text_16}>Invite Members</Text>
        <Text style={styles.text_14_light}>
          Suggest this group to new members with a shareable link.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AddMembers;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: Platform.OS === 'android' ? 35 : 0,
  },
  text_14_semi: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 14,
    alignSelf: 'center',
  },
  text_16: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 16,
    alignSelf: 'center',
  },
  text_14_light: {
    fontFamily: Fonts.POPPINS_LIGHT,
    fontSize: 14,
    alignSelf: 'center',
  },
});
