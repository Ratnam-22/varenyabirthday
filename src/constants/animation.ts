export const ANIMATION_DURATIONS = {
  MICRO: 200,
  SHORT: 400,
  MEDIUM: 750,
  LONG: 1200,
  CINEMATIC: 2000,
} as const;

export const ANIMATION_EASINGS = {
  PRIMARY: 'cubic-bezier(0.25, 1, 0.5, 1)',
  SECONDARY: 'cubic-bezier(0.42, 0, 0.58, 1)',
  SMOOTH: 'cubic-bezier(0.16, 1, 0.3, 1)',
  POWER4_OUT: 'cubic-bezier(0.19, 1, 0.22, 1)',
  POWER2_OUT: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  POWER1_IN_OUT: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  ELASTIC_SOFT: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  MAGIC_EASE: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  LUXURY_EASE: 'cubic-bezier(0.22, 1, 0.36, 1)',
} as const;
