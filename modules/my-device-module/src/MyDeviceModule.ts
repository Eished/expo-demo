import { NativeModule, requireNativeModule } from 'expo';

import { MyDeviceModuleEvents } from './MyDeviceModule.types';
import type { MyDeviceModuleSharedObject } from './MyDeviceModuleSharedObject';

declare class MyDeviceModule extends NativeModule<MyDeviceModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
  MyDeviceModuleSharedObject: typeof MyDeviceModuleSharedObject;
}

export default requireNativeModule<MyDeviceModule>('MyDeviceModule');
