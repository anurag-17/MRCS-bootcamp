import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignIn from '../screens/SignIn';
import Password from '../screens/Password';
import CreatePassword from '../screens/CreatePassword';
import Home from '../screens/Home';
import NotesContent from '../screens/Home/NotesTab/NotesContent';
import StudyInnerTab from '../screens/Home/StudyTab/StydyInnerTab';
import ForumPost from '../screens/Home/ForumTab/ForumPost';
import StationList from '../screens/Home/StudyTab/StationList';
import StepScreen from '../screens/Home/StudyTab/StepScreen';
import StepCompletedScreen from '../screens/Home/StudyTab/StepCompletedScreen';
import AnnouncementsScreen from '../screens/Home/HomeTab/AnnouncemetsScreen';
import ContactUsScreen from '../screens/Home/HomeTab/ContactUsScreen';
import MembersScreen from '../screens/Home/HomeTab/MembersScreen';
import MembersSearchScreen from '../screens/Home/HomeTab/MembersSearchScreen';
import Gallaries from '../screens/Home/HomeTab/GalleriesScreen';
import GalleryScreen from '../screens/Home/HomeTab/GalleryScreen';
import EventDetails from '../screens/Home/HomeTab/EventDetails';
import ForumCreateNewPost from '../screens/Home/ForumTab/ForumCreatNewPost';
import ForumSearchPost from '../screens/Home/ForumTab/ForumSearchPost';
import MemberProfile from '../screens/Home/ForumTab/MemberProfile';
import MemberChat from '../screens/Home/ForumTab/MemberChat';
import BadgesScreen from '../screens/Home/ForumTab/BadgesScreen';
import BadgesTypeScreen from '../screens/Home/ForumTab/BadgesScreen/BadeTypeScreen';
import NotesSearch from '../screens/Home/NotesTab/NotesSearch';
import NotesTagScreen from '../screens/Home/NotesTab/NotesTagScreen';
import NotesPostScreen from '../screens/Home/NotesTab/NotesPostScreen';

const Stack = createNativeStackNavigator();

const AuthStack = ()=>{
    return(
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false,gestureEnabled:false,
        animation:'slide_from_right'}}  >
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='SignIn' component={SignIn}/>
            <Stack.Screen name='Password' component={Password}/>
            <Stack.Screen name='CreatePassword' component={CreatePassword}/>

            {/* Forum Tabs Screen */}
            <Stack.Screen name='ForumPost' component={ForumPost}/>
            <Stack.Screen name='ForumCreateNewPost' component={ForumCreateNewPost}  options={{animation:'slide_from_bottom'}}/>
            <Stack.Screen name='ForumSearchPost' component={ForumSearchPost}  options={{animation:'slide_from_bottom'}}/>
            <Stack.Screen name='MemberProfile' component={MemberProfile}/>
            <Stack.Screen name='MemberChat' component={MemberChat}/>
            <Stack.Screen name='BadgesScreen' component={BadgesScreen}/>
            <Stack.Screen name='BadgesTypeScreen' component={BadgesTypeScreen}/>

            {/* Home Tab Screens */}
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='AnnouncementsScreen' component={AnnouncementsScreen} options={{animation:'slide_from_bottom'}}/>
            <Stack.Screen name='ContactUsScreen' component={ContactUsScreen} options={{animation:'slide_from_bottom'}}/>
            <Stack.Screen name='MembersScreen' component={MembersScreen}/>
            <Stack.Screen name='MembersSearchScreen' component={MembersSearchScreen} options={{animation:'slide_from_bottom'}}/>
            <Stack.Screen name='Galleries' component={Gallaries}/>
            <Stack.Screen name='GalleryScreen' component={GalleryScreen}/>
            <Stack.Screen name='EventDetails' component={EventDetails}/>

            {/* Notes Tab Screen */}
            <Stack.Screen name='NotesContent' component={NotesContent}/>
            <Stack.Screen name='NotesSearch' component={NotesSearch}/>
            <Stack.Screen name='NotesTagScreen' component={NotesTagScreen}/>
            <Stack.Screen name='NotesPostScreen' component={NotesPostScreen}/>

        </Stack.Navigator>
    )
}

const StudyStack = ()=>{
    return(
        <Stack.Navigator initialRouteName='StudyInnerTab'screenOptions={{headerShown:false,gestureEnabled:false,
            animation:'slide_from_right'}} >
            <Stack.Screen name='StudyInnerTab' component={StudyInnerTab}/>
            <Stack.Screen name='StationList' component={StationList} />
            <Stack.Screen name='StepScreen' component={StepScreen} options={{animation:'slide_from_bottom'}}/>
            <Stack.Screen name='StepCompletedScreen' component={StepCompletedScreen} options={{animation:'slide_from_bottom'}}/>

        </Stack.Navigator>
    )
}

export const RootNavigator = ()=>{
    return(
        <Stack.Navigator initialRouteName='AuthStack' screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name='AuthStack' component={AuthStack}/>
            <Stack.Screen name='StudyStack' component={StudyStack}/>

        </Stack.Navigator>
    )
}
