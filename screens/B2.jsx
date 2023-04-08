import { View, Text, Button } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import B21 from './B21'
import B22 from './B22'
import GroupList from '../components/GroupList'



const Stack = createStackNavigator();

const B2 = () => {

  return (
    // 開發時先設定預設畫面為B22
    <Stack.Navigator initialRouteName="B21">  
      <Stack.Screen name="B21" component={B21} options={{ headerShown: false }} />
      <Stack.Screen name="B22" component={B22} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default B2