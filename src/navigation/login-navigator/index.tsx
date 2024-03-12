import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from '../../screens';
import {NAVIGATION} from '../../constants';

const Stack = createNativeStackNavigator();

export default function LoginNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.login}
        component={LoginScreen}
        options={{headerShown: false}} // by default the header is shown
      />
    </Stack.Navigator>
  );
}
