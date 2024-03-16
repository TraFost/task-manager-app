import React from 'react';

import LoginTitle from './login-title';
import LoginForm from './login-form';
import {Container} from '../../components/atoms';

export default function LoginScreen() {
  return (
    <Container type="main" className="bg-primary pt-20">
      <Container>
        <LoginTitle />
        <LoginForm />
      </Container>
    </Container>
  );
}
