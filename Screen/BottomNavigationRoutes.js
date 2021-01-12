// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import 'react-native-gesture-handler';

import * as React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import SettingsScreen from './pages/SettingsScreen';
import ContactUs from './pages/ContactUs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// function HomeStack() {
const HomeStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#e31837'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Dashboard'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Details Page'}}
      />
    </Stack.Navigator>
  );
}


const ContactUsStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="ContactUs"
      screenOptions={{
        headerStyle: {backgroundColor: '#e31837'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{title: 'ContactUs'}}
      />
    </Stack.Navigator>
  );
}

// function SettingsStack() {
const SettingsStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: {backgroundColor: '#e31837'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Details Page'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile Page'}}
      />
    </Stack.Navigator>
  );
}

// function BottomNavigationRoutes() {
const BottomNavigationRoutes = (props) => {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeStack"
        // tabBarOptions={{
        //   activeTintColor: '#e31837',
        // }}
        tabBarOptions={{
          activeTintColor: '#e31837',
          //inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#e0e0e0',
          },
          labelStyle: {
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 14,
          },
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ContactUsStack"
          component={ContactUsStack}
          options={{
            tabBarLabel: 'ContactUs',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="contact-support"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}
export default BottomNavigationRoutes;
