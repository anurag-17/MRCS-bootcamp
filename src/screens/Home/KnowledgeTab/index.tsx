import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { secondaryTextColor, white } from '../../../theme/Colors'
import ClinicalDomainContainer from '../../../components/ClinicalDomainContainer'
import Fonts from '../../../assets/Fonts'
import Video from 'react-native-video'

const KnowledgeTab = () => {
  return (
    <ScrollView style={styles.container}>
        <ClinicalDomainContainer
        domainText='CLINICAL KNOWLEDGE DOMAIN'
        bigText='Complete Station List'
        smallText='Click here to see the station list for the Clinical Knowledge Domain.'
        />
        <ClinicalDomainContainer
        domainText='CLINICAL KNOWLEDGE DOMAIN'
        bigText='Videos'
        smallText='Videos available for 14 days'
        />

        <Text style={styles.date}>03 March 2024 - Part 1</Text>
        {/* <Video
        source={{uri:'https://www.dailymotion.com/embed/video/x2p99yn'}}
        paused={false}
        
        style={{width:'80%',height:150,borderWidth:1,alignSelf:'center'}}
        onError={(err)=>console.log("erro sr : ",err)}               

        
        /> */}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:white
    },
    date:{
        fontFamily:Fonts.POPPINS_MEDIUM,
        color:secondaryTextColor,
        fontSize:16,
        lineHeight:22,
        marginHorizontal:20,
        marginTop:10,

    }
})

export default KnowledgeTab