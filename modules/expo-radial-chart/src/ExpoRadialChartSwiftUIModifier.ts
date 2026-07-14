import { createModifier, type ModifierConfig } from '@expo/ui/swift-ui/modifiers';

export const expoRadialChartSwiftUIModifier = (params: {
  color?: string;
  width?: number;
  cornerRadius?: number;
}): ModifierConfig => createModifier('expoRadialChartSwiftUIModifier', params);
