import {NavigationContainer} from '@react-navigation/native';
import {DefaultTheme} from '@react-navigation/native';
import LoginNavigator from './login-navigator';

export default function RootNavigator() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <LoginNavigator />
    </NavigationContainer>
  );
}
