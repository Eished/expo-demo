import { createModifier, type ModifierConfig } from '@expo/ui/jetpack-compose/modifiers';

export const myDeviceModuleComposeModifier = (params: {
  color?: number;
  width?: number;
  cornerRadius?: number;
}): ModifierConfig => createModifier('myDeviceModuleComposeModifier', params);
