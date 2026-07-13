import { createModifier, type ModifierConfig } from '@expo/ui/swift-ui/modifiers';

export const myDeviceModuleSwiftUIModifier = (params: {
  color?: string;
  width?: number;
  cornerRadius?: number;
}): ModifierConfig => createModifier('myDeviceModuleSwiftUIModifier', params);
