import { registerWebModule, NativeModule } from 'expo';

import { ExpoRadialChartModuleEvents } from './ExpoRadialChart.types';

// ExpoRadialChartModule is not available on the web platform.
class ExpoRadialChartModule extends NativeModule<ExpoRadialChartModuleEvents> {}

export default registerWebModule(ExpoRadialChartModule, 'ExpoRadialChartModule');
