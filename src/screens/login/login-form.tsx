import React from 'react';

import {Text, Input, Container, Layout} from '../../components/atoms';
import {Center} from '@gluestack-ui/themed';

export default function LoginForm() {
  return (
    <Container className="bg-white mt-24">
      <Center pt={'$16'}>
        <Text isBold typeText="Header" size="3xl">
          Login
        </Text>
      </Center>
      <Layout space="3xl" px="$8">
        <Input variant="underlined" />
        <Input variant="underlined" />
      </Layout>
    </Container>
  );
}
