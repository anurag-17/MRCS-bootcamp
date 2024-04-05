import React, {useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  DarkBlue,
  LightGrayColor,
  grayE8EB,
  grayLightBlue,
  grayOuterLine,
  secondaryTextColor,
  white,
} from '../../../../theme/Colors';
import Header from '../../../../components/Header';
import Fonts from '../../../../assets/Fonts';
import {RichEditor, RichToolbar, actions} from 'react-native-pell-rich-editor';

const ForumCreateNewPost = () => {
  const handleHead = ({tintColor}: {tintColor: string}) => (
    <Text style={{color: tintColor}}>H1</Text>
  );

  const richText = useRef();

  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        type="white"
        titleStyle={styles.headerTitle}
        containerStyle={ Platform.OS=='android'? {marginTop:35}:{}}
        title="New Post"
        isPost={postTitle.length > 0 ? true : false}
        onPost={() => null}
      />
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.nameRow}>
        <Text style={[styles.text14regular, {marginVertical: 5}]}>
          Posting as username
        </Text>
      </View>
      <TextInput
        style={styles.titleInput}
        placeholder="Give this post a title"
        maxLength={100}
        placeholderTextColor={LightGrayColor}
        multiline
        onChangeText={txt => setPostTitle(txt)}
      />

      <TextInput 
        style={styles.postInput}
        placeholder='Use this space to write your post'
        placeholderTextColor={grayOuterLine}
        multiline
        onChangeText={(txt)=>setPostContent(txt)}
      />

      {/* <ScrollView>
        <Text>Description:</Text>
        <RichEditor
          ref={richText}
          placeholder={'Use this space to write your post'}
          onChange={descriptionText => {
            console.log('descriptionText:', descriptionText);
          }}
        />
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <RichToolbar
          editor={richText}
          actions={[
            actions.setBold,
            actions.setItalic,
            actions.setUnderline,
            actions.heading1,
            actions.insertLink,
            actions.alignCenter,
            actions.alignFull,
            actions.alignLeft,
            actions.alignRight,
            actions.insertBulletsList,
            actions.insertOrderedList
          ]}
          iconMap={{[actions.heading1]: handleHead}}
        />
      </KeyboardAvoidingView> */}
    </SafeAreaView>
  );

  // return (
  //   <SafeAreaView style={styles.mainContainer}>
  //       <Header
  //       type="white"
  //       titleStyle={styles.headerTitle}
  //       title="New Post"
  //       isPost={postTitle.length>0?true:false}
  //       onPost={()=>null}
  //     />
  //     <ScrollView>
  //       <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}	style={{ flex: 1 }}>
  //         <Text>Description:</Text>
  //         <RichEditor
  //             ref={richText}
  //             onChange={ descriptionText => {
  //                 console.log("descriptionText:", descriptionText);
  //             }}
  //         />
  //       </KeyboardAvoidingView>
  //     </ScrollView>

  //     <RichToolbar
  //       editor={richText}
  //       actions={[ actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1 ]}
  //       iconMap={{ [actions.heading1]: handleHead }}
  //     />
  //   </SafeAreaView>
  // );
};

// const TempScreen = () => {
//   const handleHead = ({tintColor}:{tintColor:string}) => <Text style={{color: tintColor}}>H1</Text>

// 	const richText = React.useRef();
// 	return (
//     <SafeAreaView>
//       <ScrollView>
//         <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}	style={{ flex: 1 }}>
//           <Text>Description:</Text>
//           <RichEditor
//               ref={richText}
//               onChange={ descriptionText => {
//                   console.log("descriptionText:", descriptionText);
//               }}
//           />
//         </KeyboardAvoidingView>
//       </ScrollView>

//       <RichToolbar
//         editor={richText}
//         actions={[ actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1 ]}
//         iconMap={{ [actions.heading1]: handleHead }}
//       />
//     </SafeAreaView>
//   );
// };

export default ForumCreateNewPost;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: white,
  },
  headerTitle: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
    color: DarkBlue,
    marginLeft: 30,
  },
  nameRow: {
    marginTop: 15,
    backgroundColor: grayE8EB,
    paddingLeft: 20,
  },
  text14regular: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 12,
    color: secondaryTextColor,
  },
  titleInput: {
    marginVertical: 20,
    marginHorizontal: 20,
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  postInput: {
    marginHorizontal: 20,
    marginTop: 10,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: secondaryTextColor,
  },
});
