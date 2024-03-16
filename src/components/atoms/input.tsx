import {Input, InputField, InputIcon, InputSlot} from '@gluestack-ui/themed';

interface IInput {
  variant: 'underlined' | 'outline' | 'rounded';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'text' | 'password';
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  placeholder?: string;
  customIcon?: {
    color?: any;
    icon: React.ReactNode | string;
    position?: 'left' | 'right';
  };
  onPress?: () => void;
}

export default function InputComp({
  placeholder = 'placeholder',
  isDisabled,
  isInvalid,
  isReadOnly,
  size = 'md',
  variant,
  type = 'text',
  onPress,
  customIcon,
}: IInput) {
  const configurePadding = (position: 'left' | 'right') => {
    switch (position) {
      case 'left':
        return '$3';
      case 'right':
        return '$3';
      default:
        return '$0';
    }
  };

  const RenderIcon = (
    <InputSlot
      onPress={onPress}
      pl={configurePadding(customIcon?.position!)}
      pr={configurePadding(customIcon?.position!)}>
      <InputIcon as={customIcon?.icon} color={customIcon?.color} />
    </InputSlot>
  );

  return (
    <Input
      variant={variant}
      size={size}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}>
      {customIcon?.position === 'left' && RenderIcon}
      <InputField type={type} placeholder={placeholder} />
      {customIcon?.position === 'right' && RenderIcon}
    </Input>
  );
}
