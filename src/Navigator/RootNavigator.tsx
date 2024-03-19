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

const Stack = createNativeStackNavigator();

const AuthStack = ()=>{
    return(
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false,gestureEnabled:false,
        animation:'slide_from_right'}}  >
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='SignIn' component={SignIn}/>
            <Stack.Screen name='Password' component={Password}/>
            <Stack.Screen name='CreatePassword' component={CreatePassword}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='NotesContent' component={NotesContent}/>
            <Stack.Screen name='ForumPost' component={ForumPost}/>
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
