export interface EnvironmentConfig {
  backgroundColor: string;
  fogColor: string;
  fogNear: number;
  fogFar: number;
  fogDensity: number;
  useExpFog: boolean;
  hdrPreset?: 'sunset' | 'night' | 'dawn' | 'forest' | 'studio' | 'city' | 'park' | 'lobby';
}
