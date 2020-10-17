import React from 'react';
import RegisterScreen from './Screens/RegisterScreen';
import LoginScreen from './Screens/LoginScreen'
import MainScreen from './Screens/MainScreen'
import EditProfileScreen from './Screens/EditProfileScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/SplashScreen';
import { View, Text ,Button} from 'react-native'


const  TestingScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Testing !</Text>
    
    {/* <Button
      title='Testing'
      onPress={() => props.navigation.navigate('TestingScreen')}
    /> */}
    
    <Button
      title='Splash'
      onPress={() => props.navigation.navigate('Splash')}
    />
   
    <Button
      title='Main'
      onPress={() => props.navigation.navigate('Main')}
    />
    
    
    <Button
      title='Login Screen'
      onPress={() => props.navigation.navigate('Login')}
    />
    <Button
      title='Register Screen'
      onPress={() => props.navigation.navigate('Register')}
    />
    
    {/* <Button
      title='Home Screen'
      onPress={() => props.navigation.navigate('Home')}
    /> */}
    <Button
      title='Edit Profile'
      onPress={() => props.navigation.navigate('EditProfile')}
    />
    {/* <Button
      title='User Review'
      onPress={() => props.navigation.navigate('User Review')}
    />
    <Button
      title='Edit Profile'
      onPress={() => props.navigation.navigate('Edit Profile')}
    />
     <Button
      title='Play You Tube'
      onPress={() => props.navigation.navigate('Play')}
    />
     <Button
      title='list details component'
      onPress={() => props.navigation.navigate('ListDetails')}
    />  */}
    
  
  </View>
  )
}




const Stack = createStackNavigator();


const RootStackScreen = ({ navigation }) => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name="Testing" component={TestingScreen} />
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} />

  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}
