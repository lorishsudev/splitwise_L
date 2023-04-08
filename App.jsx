import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import Landing from './screens/Landing';
import B from './screens/B';
import C from './screens/C';
import Groups from './screens/Groups';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
            <Stack.Screen name="B" component={B} options={{ headerShown: false }} />
            <Stack.Screen
              name="C"
              component={C}
              options={{ headerShown: false }}
              initialParams={{ IniGroupName: '123' }}
            />
            <Stack.Screen name="Groups" component={Groups} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App