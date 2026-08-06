export type LightingPreset = 'night' | 'golden' | 'studio' | 'magic';

export interface LightingConfig {
  preset: LightingPreset;
  ambientIntensity: number;
  directionalIntensity: number;
  directionalColor: string;
  shadows: boolean;
}
