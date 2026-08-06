export type ParticlePresetType =
  | 'Fireflies'
  | 'FloatingDust'
  | 'Sparkles'
  | 'Petals'
  | 'Stars'
  | 'MagicOrbs'
  | 'Bokeh';

export interface ParticleEmitterConfig {
  count: number;
  size: number;
  color: string;
  speed: number;
  spread: [number, number, number];
}
