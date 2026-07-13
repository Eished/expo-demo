import { requireNativeView } from 'expo';
import * as React from 'react';

import { MyDeviceModuleViewProps } from './MyDeviceModule.types';

const NativeView: React.ComponentType<MyDeviceModuleViewProps> = requireNativeView('MyDeviceModule');

export default function MyDeviceModuleView(props: MyDeviceModuleViewProps) {
  return <NativeView {...props} />;
}
