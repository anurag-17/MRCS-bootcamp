import React, {FC} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DarkBlue, LightGrayColor, grayD9, grayE8EB} from '../../theme/Colors';
import Fonts from '../../assets/Fonts';
import IconButton from '../IconButton';
import LeftRightText from '../LeftRightText';

interface AchievedBadgesProps {
  onPressSubscription?: () => void;
  onPressTester?: () => void;
  onPessAll?:()=>void;
}

const AchievedBadges: FC<AchievedBadgesProps> = ({
  onPressSubscription,
  onPressTester,
  onPessAll
}) => {
  return (
    <View style={styles.container}>
      <LeftRightText 
      leftText='Achieved Badges'
      onPressAll={onPessAll!=undefined ? onPessAll:()=>null}
      rightText='View All'
      containerStyle={{marginTop:25}}
      />
      <TouchableOpacity
        style={styles.buttonOuter}
        onPress={onPressSubscription}>
        <IconButton
          isIcon
          title={'Part B Subscription'}
          isStar={true}
          btnStyle={{width: '42%'}}
        />
        <View style={{flexDirection: 'row'}}>
          {[1, 2].map((item, index) => {
            return (
              <View
                style={[styles.roundImage, index !== 0 && {marginLeft: -7}]}>
                <Text style={styles.singleChar}>A</Text>
              </View>
            );
          })}
          <Text style={styles.badgesText}>{`2 badge holders`}</Text>
        </View>
      </TouchableOpacity>

      {onPressTester && (
        <>
          <View style={styles.br} />
          <TouchableOpacity style={styles.buttonOuter} onPress={onPressTester}>
            <IconButton
              isIcon
              title={'Tester'}
              isStar={false}
              btnStyle={{width: '32%'}}
            />
            <View style={{flexDirection: 'row'}}>
              {[1, 2, 3].map((item, index) => {
                return (
                  <View
                    style={[
                      styles.roundImage,
                      index !== 0 && {marginLeft: -7},
                    ]}>
                    <Text style={styles.singleChar}>A</Text>
                  </View>
                );
              })}
              <Text style={styles.badgesText}>{`3 badge holders`}</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default AchievedBadges;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: grayE8EB,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  rowBtwn: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  br: {
    backgroundColor: grayE8EB,
    height: 1,
    marginTop:20,
  },
  darkText: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 14,
    color: DarkBlue,
  },
  roundImage: {
    height: 21,
    width: 21,
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: grayD9,
  },
  singleChar: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 13,
  },
  buttonOuter: {
    marginTop: 20,
    justifyContent: 'space-between',
    height: 60,
  },
  badgesText: {
    color: LightGrayColor,
    alignSelf: 'center',
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 12,
    marginLeft: 10,
  },
});
