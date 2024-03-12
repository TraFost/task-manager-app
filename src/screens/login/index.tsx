import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {StyledComponent} from 'nativewind';

import LoginTitle from './login-title';
import LoginForm from './login-form';

export default function LoginScreen() {
  return (
    <StyledComponent
      component={SafeAreaView}
      tw="bg-primary min-h-screen pt-20">
      <StyledComponent component={ScrollView} tw="h-full">
        <LoginTitle />
        <LoginForm />
      </StyledComponent>
    </StyledComponent>
  );
}
