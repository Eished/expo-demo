import { NativeModule, requireNativeModule } from 'expo';

import { ExpoRadialChartModuleEvents } from './ExpoRadialChart.types';

declare class ExpoRadialChartModule extends NativeModule<ExpoRadialChartModuleEvents> {
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

export default requireNativeModule<ExpoRadialChartModule>('ExpoRadialChart');
