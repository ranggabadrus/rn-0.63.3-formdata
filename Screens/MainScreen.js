import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AboutMe from '../Pages/Aboutme';
import HomeScreen from '../Pages/Home'
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={AboutMe} />
    </Tab.Navigator>

  );
}

export default MainScreen;