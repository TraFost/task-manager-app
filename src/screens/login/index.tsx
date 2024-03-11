import React from 'react';
import {Text} from '@gluestack-ui/themed';

import {SafeAreaView} from 'react-native';
import {styled} from 'nativewind';

const StyledSafeView = styled(SafeAreaView);

export default function LoginScreen() {
  return (
    <StyledSafeView className="bg-red-500">
      <Text>Login</Text>
    </StyledSafeView>
  );
}
