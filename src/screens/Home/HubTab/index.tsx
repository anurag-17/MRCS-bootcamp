import React from 'react'
import { ScrollView,Text,View,Image } from 'react-native'
import { styles } from './style'
import { London } from '../../../assets/images'

const HubTab = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
            <Image source={require('../../../assets/images/home/London.png')} style={styles.londonImage} resizeMode='cover' />
            <Text style={styles.bootCampText}>{'Boot Camp Mock - 01 March 2024'}</Text>
        </View>
    </ScrollView>
  )
}

export default HubTab