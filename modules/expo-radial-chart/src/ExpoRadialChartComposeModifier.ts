import { createModifier, type ModifierConfig } from '@expo/ui/jetpack-compose/modifiers';

export const expoRadialChartComposeModifier = (params: {
  color?: number;
  width?: number;
  cornerRadius?: number;
}): ModifierConfig => createModifier('expoRadialChartComposeModifier', params);
