import * as React from 'react';

import { MyDeviceModuleViewProps } from './MyDeviceModule.types';

export default function MyDeviceModuleView(props: MyDeviceModuleViewProps) {
  return (
    <div
      style={{
        backgroundColor: '#aabbcc',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={() => props.onTap({ nativeEvent: {} })}>
      <span>MyDeviceModule - native view</span>
      <span>Tap the view to emit a view event</span>
    </div>
  );
}
