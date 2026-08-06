export interface ExperienceConfig {
  defaultCameraFov: number;
  defaultCameraPosition: [number, number, number];
  defaultCameraTarget: [number, number, number];
  transitionDurationMs: number;
  defaultLightingPreset: 'night' | 'golden' | 'studio' | 'magic';
  featureFlags: {
    enableParticles: boolean;
    enablePostProcessing: boolean;
    enableAudio: boolean;
    enableDebugProfiler: boolean;
    enablePhotoMode: boolean;
  };
}

export const experienceConfig: ExperienceConfig = {
  defaultCameraFov: 50,
  defaultCameraPosition: [0, 0, 10],
  defaultCameraTarget: [0, 0, 0],
  transitionDurationMs: 600,
  defaultLightingPreset: 'night',
  featureFlags: {
    enableParticles: true,
    enablePostProcessing: true,
    enableAudio: true,
    enableDebugProfiler: true,
    enablePhotoMode: true,
  },
};
