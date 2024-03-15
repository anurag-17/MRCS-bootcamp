import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { secondaryTextColor } from '../../../theme/Colors'
import { AddPost, Search } from '../../../assets/images'

const ForumTab = () => {
  return (
    <View style={styles.container}>
            <View style={styles.firstRow}>
              <Text
                style={[styles.examNViewAllText, {color: secondaryTextColor}]}>
                {'General Discussion'}
              </Text>
              <TouchableOpacity>
                <Text style={styles.examNViewAllText}>{'Follow'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.dividerLine}/>
            <View style={{flexDirection:'row',marginHorizontal:20,justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                <AddPost style={styles.addPostIcon}/>
                <Text
                style={[styles.examNViewAllText]}>
                {'Create New Post'}
              </Text>
                </View>
                <View style={styles.searchContainer}>
                    <Search style={styles.searchIcon}/>
                </View>
            </View>
            <View style={styles.fatDivider}/>
    </View>
  )
}

export default ForumTab