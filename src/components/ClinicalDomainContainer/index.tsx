import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Fonts from '../../assets/Fonts'
import { blueTypeTextColor, secondaryTextColor } from '../../theme/Colors'

interface ClinicalDomainContainerProps {
    domainText: string;
    bigText: string;
    smallText: string;
}

const ClinicalDomainContainer :React.FC<ClinicalDomainContainerProps> =(
    {
        domainText,
        bigText,
        smallText
    }
) => {
  return (
    <View style={styles.skillContainer}>
        <Text style={styles.domainText}>{domainText}</Text>
        <Text style={styles.bigText}>{bigText}</Text>

        <Text style={styles.smallText}>{smallText}</Text>

        </View>
  )
}

 const styles  = StyleSheet.create({

    skillContainer:{
        marginTop:40,
        justifyContent:'center',
        marginHorizontal:40,
    },
    domainText:{
        fontFamily:Fonts.POPPINS_SEMIBOLD,
        fontSize:13,
        color:secondaryTextColor,
        marginLeft:40,
        // lineHeight:22,
    },
    bigText:{
        fontFamily:Fonts.EBGARAMOND_REGULAR,
        marginTop:10,
        fontSize:50,
        lineHeight:55,
        color:blueTypeTextColor,
        marginLeft:40,
    },
    smallText:{
        fontFamily:Fonts.POPPINS_LIGHT,
        fontSize:11,
        color:secondaryTextColor,
        lineHeight:16,
        marginLeft:40,
    }
})

export default ClinicalDomainContainer