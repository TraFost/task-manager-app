import {View} from 'react-native';
import {StyledComponent} from 'nativewind';
import {Image, Text} from '../../components/atoms';

export default function LoginTitle() {
  return (
    <StyledComponent
      component={View}
      tw="flex flex-row items-center justify-center gap-4">
      {/* need to use real image */}
      <Image source="https://placehold.co/400x400.png" />
      <StyledComponent component={View} className="flex flex-col items-center">
        <Text isBold typeText="Header" size="2xl">
          ZapTime
        </Text>
        <Text size="md">Attend your tasks</Text>
      </StyledComponent>
    </StyledComponent>
  );
}
