export type PerformancePreset = 'Ultra' | 'High' | 'Medium' | 'Low' | 'BatterySaver';

export interface PerformanceSettings {
  preset: PerformancePreset;
  dpr: number;
  shadowMapSize: number;
  particleBudget: number;
  postProcessingEnabled: boolean;
}
