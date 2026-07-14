import { requireNativeView } from 'expo';
import { type PrimitiveBaseProps } from '@expo/ui/jetpack-compose';
import { createViewModifierEventListener } from '@expo/ui/jetpack-compose/modifiers';
import * as React from 'react';

export interface ExpoRadialChartComposeViewProps extends PrimitiveBaseProps {
  title: string;
  children?: React.ReactNode;
}

const NativeExpoRadialChartComposeView = requireNativeView<ExpoRadialChartComposeViewProps>(
  'ExpoRadialChart',
  'ExpoRadialChartComposeView'
);

export default function ExpoRadialChartComposeView({
  modifiers,
  ...rest
}: ExpoRadialChartComposeViewProps) {
  return (
    <NativeExpoRadialChartComposeView
      modifiers={modifiers}
      {...(modifiers ? createViewModifierEventListener(modifiers) : undefined)}
      {...rest}
    />
  );
}
