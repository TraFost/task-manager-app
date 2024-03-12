import {Text, Heading} from '@gluestack-ui/themed';
import {View} from 'react-native';
import {styled} from 'nativewind';

interface IText {
  children: React.ReactNode;
  typeText?: 'Text' | 'Header';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  isBold?: boolean;
  isTruncated?: boolean;
  isHighlighted?: boolean;
  classNameContainer?: string;
  color?: string;
}

const StyledView = styled(View);

export default function TextComp({
  typeText = 'Text',
  size = 'md',
  isBold,
  isTruncated,
  isHighlighted,
  children,
  classNameContainer = '',
  color = '#000',
}: IText) {
  const RenderedText = typeText === 'Text' ? Text : Heading;

  return (
    <StyledView tw={classNameContainer}>
      <RenderedText
        style={{color: color}}
        isTruncated={isTruncated}
        bold={isBold}
        highlight={isHighlighted}
        size={size}>
        {children}
      </RenderedText>
    </StyledView>
  );
}
