import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignIn from '../screens/SignIn';
import Password from '../screens/Password';

const Stack = createNativeStackNavigator();

const AuthStack = ()=>{
    return(
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false,gestureEnabled:false,
        animation:'slide_from_right'}}  >
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='SignIn' component={SignIn}/>
            <Stack.Screen name='Password' component={Password}/>

        </Stack.Navigator>
    )
}

export const RootNavigator = ()=>{
    return(
        <Stack.Navigator initialRouteName='AuthStack' screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name='AuthStack' component={AuthStack}/>
        </Stack.Navigator>
    )
}