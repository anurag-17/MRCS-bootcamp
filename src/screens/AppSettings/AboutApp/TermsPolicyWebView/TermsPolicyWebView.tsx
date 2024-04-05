import React, { useState } from 'react';
import {
    ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DarkBlue, secondaryTextColor, white} from '../../../../theme/Colors';
import {BackArrow} from '../../../../assets/images';
import {useNavigation, useRoute} from '@react-navigation/native';
import Fonts from '../../../../assets/Fonts';
import WebView from 'react-native-webview';

const TermsPolicyWebView = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {title} = route.params ?? '';

  const getUri = () => {
    if (title == 'Privacy Policy') {
      return 'https://www.mrcsbootcamp.com/privacy-policy';
    } else {
      return 'https://www.mrcsbootcamp.com/terms-conditions';
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow style={{ alignSelf: 'center' }} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>

      
        <WebView
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          source={{ uri: getUri() }}
        />
        {isLoading && (
        <ActivityIndicator size="large" color={DarkBlue} />
      ) }
      
    </SafeAreaView>
  );
};

export default TermsPolicyWebView;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    height:35
  },
  title: {
    fontSize: 14,
    marginLeft: 40,
    marginTop:-2,
    color: secondaryTextColor,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
  },
});
