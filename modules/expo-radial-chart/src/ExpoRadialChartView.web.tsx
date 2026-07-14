import { ExpoRadialChartViewProps } from './ExpoRadialChart.types';

// ExpoRadialChartView is not available on the web platform.
export default function ExpoRadialChartView(_props: ExpoRadialChartViewProps) {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span>ExpoRadialChartView is not available on the web platform.</span>
    </div>
  );
}
