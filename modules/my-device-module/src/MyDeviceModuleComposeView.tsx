import { requireNativeView } from 'expo';
import { type PrimitiveBaseProps } from '@expo/ui/jetpack-compose';
import { createViewModifierEventListener } from '@expo/ui/jetpack-compose/modifiers';
import * as React from 'react';

export interface MyDeviceModuleComposeViewProps extends PrimitiveBaseProps {
  title: string;
  children?: React.ReactNode;
}

const NativeMyDeviceModuleComposeView = requireNativeView<MyDeviceModuleComposeViewProps>(
  'MyDeviceModule',
  'MyDeviceModuleComposeView'
);

export default function MyDeviceModuleComposeView({
  modifiers,
  ...rest
}: MyDeviceModuleComposeViewProps) {
  return (
    <NativeMyDeviceModuleComposeView
      modifiers={modifiers}
      {...(modifiers ? createViewModifierEventListener(modifiers) : undefined)}
      {...rest}
    />
  );
}
