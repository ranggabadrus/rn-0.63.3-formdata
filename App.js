import React from 'react';
import RegisterScreen from './Screens/RegisterScreen';
import LoginScreen from './Screens/LoginScreen'
import MainScreen from './Screens/MainScreen'
import EditprofileScreen from './Screens/EditprofileScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/SplashScreen';


const Stack = createStackNavigator();


const RootStackScreen = ({ navigation }) => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="MainScreen" component={MainScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    <Stack.Screen name="EditprofileScreen" component={EditprofileScreen} />

  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}
