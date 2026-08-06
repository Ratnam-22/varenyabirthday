export type EmotionPresetType = 'Wonder' | 'Magic' | 'Romantic' | 'Dream' | 'Peaceful' | 'Celebration';

export interface EmotionPresetConfig {
  lightingPreset: 'night' | 'golden' | 'studio' | 'magic';
  bloomIntensity: number;
  cameraDamping: number;
  audioIntensity: number;
  particleBudget: number;
}

export const emotionPresets: Record<EmotionPresetType, EmotionPresetConfig> = {
  Wonder: { lightingPreset: 'magic', bloomIntensity: 1.2, cameraDamping: 0.05, audioIntensity: 0.9, particleBudget: 3000 },
  Magic: { lightingPreset: 'magic', bloomIntensity: 1.5, cameraDamping: 0.04, audioIntensity: 1.0, particleBudget: 4000 },
  Romantic: { lightingPreset: 'golden', bloomIntensity: 1.0, cameraDamping: 0.03, audioIntensity: 0.8, particleBudget: 2500 },
  Dream: { lightingPreset: 'night', bloomIntensity: 1.3, cameraDamping: 0.02, audioIntensity: 0.7, particleBudget: 3500 },
  Peaceful: { lightingPreset: 'night', bloomIntensity: 0.8, cameraDamping: 0.05, audioIntensity: 0.5, particleBudget: 1500 },
  Celebration: { lightingPreset: 'golden', bloomIntensity: 1.6, cameraDamping: 0.08, audioIntensity: 1.0, particleBudget: 5000 },
};
