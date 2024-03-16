import {SafeAreaView, View} from 'react-native';
import {StyledComponent} from 'nativewind';
import {useDimensions} from '../../hooks';

interface IContainer {
  children: React.ReactNode;
  className?: string;
  type?: 'container' | 'main';
}

export default function ContainerComp({
  children,
  className,
  type = 'container',
}: IContainer) {
  const {
    screen: {height, width},
  } = useDimensions();

  const RenderView = type === 'container' ? View : SafeAreaView;

  return (
    <StyledComponent
      style={{width, height}}
      component={RenderView}
      tw={className}>
      {children}
    </StyledComponent>
  );
}
