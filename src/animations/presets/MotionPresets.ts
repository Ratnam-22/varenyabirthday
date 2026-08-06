import { ANIMATION_EASINGS } from '@/constants/animation';

export type MotionPresetType =
  | 'Gentle'
  | 'Floating'
  | 'Magical'
  | 'Cinematic'
  | 'Dramatic'
  | 'Playful';

export interface MotionPresetConfig {
  ease: string;
  duration: number;
}

export const motionPresets: Record<MotionPresetType, MotionPresetConfig> = {
  Gentle: { ease: ANIMATION_EASINGS.POWER2_OUT, duration: 0.8 },
  Floating: { ease: ANIMATION_EASINGS.POWER1_IN_OUT, duration: 1.2 },
  Magical: { ease: ANIMATION_EASINGS.MAGIC_EASE, duration: 1.0 },
  Cinematic: { ease: ANIMATION_EASINGS.LUXURY_EASE, duration: 1.5 },
  Dramatic: { ease: ANIMATION_EASINGS.POWER4_OUT, duration: 0.6 },
  Playful: { ease: ANIMATION_EASINGS.ELASTIC_SOFT, duration: 0.9 },
};
