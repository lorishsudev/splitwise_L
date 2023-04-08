import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Friends from './Friends';
import B2 from './B2';
import B3 from './B3';
import B4 from './B4';
import B5 from './B5';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const B = () => {
  return (
    <Tab.Navigator
      initialRouteName="B2"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#999',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Friends') {
            iconName = focused
              ? 'face-man-shimmer'
              : 'face-man-shimmer-outline';
          } else if (route.name === 'B2') {
            iconName = focused ? 'account-group' : 'account-group-outline';
          } else if (route.name === 'B3') {
            iconName = focused ? 'plus-box' : 'plus-box';
            size = 40;
            color = '#18A582';
          } else if (route.name === 'B4') {
            iconName = focused ? 'home-analytics' : 'google-analytics';
          } else if (route.name === 'B5') {
            iconName = focused ? 'account-circle' : 'account-circle';
            color = '#850120';
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        headerShown: false,
      })}
      >
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{ tabBarLabel: 'Friends' }}
      />
      <Tab.Screen
        name="B2"
        component={B2}
        options={{ tabBarLabel: 'Groups' }}
      />
      <Tab.Screen
        name="B3"
        component={B3}
        options={{ tabBarLabel: '', tabBarStyle: { display: 'none' } }}
      />
      <Tab.Screen
        name="B4"
        component={B4}
        options={{ tabBarLabel: 'Activity' }}
      />
      <Tab.Screen
        name="B5"
        component={B5}
        options={{ tabBarLabel: 'Account' }}
      />
    </Tab.Navigator>
  );
};

export default B;
