import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AboutMeScreen from '../Pages/AboutMeScreen';
import HomeScreen from '../Pages/HomeScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
import EditProfileScreen from '../pages/EditProfileScreen';

const Tab = createBottomTabNavigator();
const MainScreen = () => {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home': 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user-circle' : 'user-circle';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={23} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#2c3e50',
        inactiveTintColor: 'gray',
      }}
    >
      
      <Tab.Screen name="Profile" component={EditProfileScreen} />
       <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About me" component={AboutMeScreen} />
    
    </Tab.Navigator>

  );
}

export default MainScreen;