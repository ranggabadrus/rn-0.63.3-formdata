import React from 'react';
import RegisterPage from './Components/Registerpage';
import LoginPage from './Components/Loginpage'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import splash from './Components/splash';


const Stack = createStackNavigator();


const RootStackScreen = ({ navigation }) => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name="splash" component={splash} />
    <Stack.Screen name="LoginPage" component={LoginPage} />
    <Stack.Screen name="RegisterPage" component={RegisterPage} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}
