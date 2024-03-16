import React from 'react';

import {VStack, HStack} from '@gluestack-ui/themed';

interface IScreenLayout {
  children: React.ReactNode;
  type?: 'vertical' | 'horizontal';
  reversed?: boolean;
  space: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  [key: string]: any;
}

export default function ScreenLayout({
  children,
  type = 'vertical',
  reversed,
  space,
  ...rest
}: IScreenLayout) {
  const RenderedScreen = type === 'vertical' ? VStack : HStack;

  return (
    <RenderedScreen reversed={reversed} space={space} {...rest}>
      {children}
    </RenderedScreen>
  );
}
