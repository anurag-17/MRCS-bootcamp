import React from 'react'
import { styles } from './styles'
import { Text, View } from 'react-native'
import ClinicalDomainContainer from '../../../components/ClinicalDomainContainer'

const SkillsTab = () => {
  return (
    <View style={styles.container}>
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
    </View>
  )
}

export default SkillsTab