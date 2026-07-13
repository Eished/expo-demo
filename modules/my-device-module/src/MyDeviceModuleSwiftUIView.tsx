import { requireNativeView } from 'expo';
import { type CommonViewModifierProps } from '@expo/ui/swift-ui';
import { createViewModifierEventListener } from '@expo/ui/swift-ui/modifiers';
import * as React from 'react';

export interface MyDeviceModuleSwiftUIViewProps extends CommonViewModifierProps {
  title: string;
  children?: React.ReactNode;
}

const NativeMyDeviceModuleSwiftUIView = requireNativeView<MyDeviceModuleSwiftUIViewProps>(
  'MyDeviceModule',
  'MyDeviceModuleSwiftUIView'
);

export default function MyDeviceModuleSwiftUIView({
  modifiers,
  ...rest
}: MyDeviceModuleSwiftUIViewProps) {
  return (
    <NativeMyDeviceModuleSwiftUIView
      modifiers={modifiers}
      {...(modifiers ? createViewModifierEventListener(modifiers) : undefined)}
      {...rest}
    />
  );
}
