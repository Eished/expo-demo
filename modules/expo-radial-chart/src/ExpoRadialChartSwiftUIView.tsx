import { requireNativeView } from 'expo';
import { type CommonViewModifierProps } from '@expo/ui/swift-ui';
import { createViewModifierEventListener } from '@expo/ui/swift-ui/modifiers';
import * as React from 'react';

export interface ExpoRadialChartSwiftUIViewProps extends CommonViewModifierProps {
  title: string;
  children?: React.ReactNode;
}

const NativeExpoRadialChartSwiftUIView = requireNativeView<ExpoRadialChartSwiftUIViewProps>(
  'ExpoRadialChart',
  'ExpoRadialChartSwiftUIView'
);

export default function ExpoRadialChartSwiftUIView({
  modifiers,
  ...rest
}: ExpoRadialChartSwiftUIViewProps) {
  return (
    <NativeExpoRadialChartSwiftUIView
      modifiers={modifiers}
      {...(modifiers ? createViewModifierEventListener(modifiers) : undefined)}
      {...rest}
    />
  );
}
