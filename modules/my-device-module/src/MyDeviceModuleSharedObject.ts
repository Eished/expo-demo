import { SharedObject, useReleasingSharedObject } from 'expo-modules-core';

import MyDeviceModule from './MyDeviceModule';

export declare class MyDeviceModuleSharedObject extends SharedObject {
  count: number;
}

/**
 * Creates a new MyDeviceModuleSharedObject instance.
 * You are responsible for releasing it from memory by calling `release()` when done.
 */
export function createMyDeviceModuleSharedObject(): MyDeviceModuleSharedObject {
  return new MyDeviceModule.MyDeviceModuleSharedObject();
}

/**
 * A hook that creates a MyDeviceModuleSharedObject instance and automatically
 * releases it when the component unmounts.
 */
export function useMyDeviceModuleSharedObject(): MyDeviceModuleSharedObject {
  return useReleasingSharedObject(() => new MyDeviceModule.MyDeviceModuleSharedObject(), []);
}
