import { ParticlePresetType, ParticleEmitterConfig } from './types';

export const particlePresets: Record<ParticlePresetType, ParticleEmitterConfig> = {
  Fireflies: { count: 300, size: 0.15, color: '#ffd700', speed: 0.5, spread: [20, 20, 20] },
  FloatingDust: { count: 500, size: 0.08, color: '#ffffff', speed: 0.2, spread: [25, 25, 25] },
  Sparkles: { count: 400, size: 0.2, color: '#e6c280', speed: 0.8, spread: [15, 15, 15] },
  Petals: { count: 200, size: 0.25, color: '#b76e79', speed: 0.6, spread: [18, 18, 18] },
  Stars: { count: 1000, size: 0.05, color: '#ffffff', speed: 0.05, spread: [50, 50, 50] },
  MagicOrbs: { count: 100, size: 0.4, color: '#d4af37', speed: 0.3, spread: [12, 12, 12] },
  Bokeh: { count: 150, size: 0.6, color: '#fcf6ba', speed: 0.15, spread: [10, 10, 10] },
};
