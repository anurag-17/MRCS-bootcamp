import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import { Share } from '../../assets/images';

const UpComingMock = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.upperLeftSide}>
          <Text style={styles.dayText}>{'8'}</Text>
          <Text style={styles.monthText}>{'MAR'}</Text>
        </View>
        <View style={styles.upperRightSide}>
          <Text style={styles.bootCampOnlineText}>{'Boot Camp Online Mock'}</Text>
          <Text style={styles.dateTimeStatusText}>{'Mar 8, 2024 | 16:00 Online'}</Text>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.shareContainer}>
          <Share style={styles.shareIcon}/>
          <Text style={styles.shareText}>{'Share'}</Text>
        </View>
        <View style={styles.verticalLine}/>
        <Text style={styles.detailsText}>{'Details'}</Text>
      </View>
    </View>
  );
}

export default UpComingMock