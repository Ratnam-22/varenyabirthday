export type DeviceTier = 'low' | 'medium' | 'high';

export interface PerformanceContextType {
  tier: DeviceTier;
  prefersReducedMotion: boolean;
  isMobile: boolean;
  fps: number;
}
