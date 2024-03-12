import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NAVIGATION} from '../../constants';

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.home} component={() => <></>} />
    </Stack.Navigator>
  );
}
