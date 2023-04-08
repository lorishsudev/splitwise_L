import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddFriend from './AddFriend';
import ListFriend from './ListFriend';
import EditFriend from './EditFriend';

const Stack = createStackNavigator();

const Friends = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListFriend" component={ListFriend} options={{ headerShown: false }} />
      <Stack.Screen name="AddFriend"  component={AddFriend}  options={{ headerShown: false }} />
      <Stack.Screen name="EditFriend" component={EditFriend} options={{ headerShown: false }} />
    </Stack.Navigator>
  ) 
}

export default Friends