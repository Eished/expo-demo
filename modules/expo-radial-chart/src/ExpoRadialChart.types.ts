import type { StyleProp, ViewStyle } from 'react-native';

export type ExpoRadialChartModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
};

export type ChangeEventPayload = {
  value: string;
};

export type OnTapEventPayload = Record<string, never>;

type Series = {
  color: string;
  percentage: number;
};

export type ExpoRadialChartViewProps = {
  style?: StyleProp<ViewStyle>;
  data: Series[];
};
