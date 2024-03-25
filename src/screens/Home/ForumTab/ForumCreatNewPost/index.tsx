import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { DarkBlue, grayE8EB, grayLightBlue, secondaryTextColor, white } from '../../../../theme/Colors'
import Header from '../../../../components/Header'
import Fonts from '../../../../assets/Fonts'

const ForumCreateNewPost = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
        <Header
        type="white"
        titleStyle={styles.headerTitle}
        title="New Post"
        isPost={false}
        onPost={()=>null}
      />
      <View style={styles.nameRow}>
        <Text style={styles.text14regular}>Posting as username</Text>
      </View>
    </SafeAreaView>
  )
}

export default ForumCreateNewPost

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:white
    },
    headerTitle: {
        fontFamily: Fonts.POPPINS_MEDIUM,
        fontSize: 16,
        color: DarkBlue,
        marginLeft: 30,
      },
      nameRow:{
        marginTop:15,
        backgroundColor:grayE8EB,
        paddingLeft:20
      },
      text14regular: {
        fontFamily: Fonts.POPPINS_REGULAR,
        fontSize: 12,
        color: secondaryTextColor,
      },
})