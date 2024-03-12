import {Image} from '@gluestack-ui/themed';
import {View} from 'react-native';
import {StyledComponent} from 'nativewind';

interface IImage {
  containerClassName?: string;
  source: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | '2xs';
  borderRadius?: number;
}

export default function ImageComp({
  containerClassName = '',
  size = 'lg',
  borderRadius = 0,
  source,
}: IImage) {
  return (
    <StyledComponent component={View} tw={containerClassName}>
      <Image
        borderRadius={borderRadius}
        size={size}
        source={{uri: source}}
        alt="e"
      />
    </StyledComponent>
  );
}
