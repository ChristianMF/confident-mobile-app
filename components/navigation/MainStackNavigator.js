import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Confident from '../screens/Confident'
import Contacts from '../screens/Contacts'
import PrivacyPolicy from '../screens/PrivacyPolicy'

const Stack = createStackNavigator()

const MyTheme = {
  dark: false,
  colors: {
    primary: 'white',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'white',
    notification: 'white',
  },
};

function MainStackNavigator() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          gestureEnabled: true,
        }}
        headerMode='false'
        >
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='Confident'
          component={Confident}
        />
        <Stack.Screen
          name='Contacts'
          component={Contacts}
        />
        <Stack.Screen
          name='PrivacyPolicy'
          component={PrivacyPolicy}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator