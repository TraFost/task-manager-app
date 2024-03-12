import {useEffect, useState} from 'react';
import {Dimensions, ScaledSize, EventSubscription} from 'react-native';

interface DimensionsState {
  window: ScaledSize;
  screen: ScaledSize;
}

const useScreenDimensions = (): DimensionsState => {
  const [dimensions, setDimensions] = useState<DimensionsState>({
    window: Dimensions.get('window'),
    screen: Dimensions.get('screen'),
  });

  useEffect(() => {
    const handleChange = ({
      window,
      screen,
    }: {
      window: ScaledSize;
      screen: ScaledSize;
    }) => {
      setDimensions({window, screen});
    };

    const subscription: EventSubscription = Dimensions.addEventListener(
      'change',
      handleChange,
    );

    return () => subscription.remove();
  }, []);

  return dimensions;
};

export default useScreenDimensions;
