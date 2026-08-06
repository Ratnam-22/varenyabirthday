import { EffectSettings } from './types';

export class EffectRegistry {
  private static instance: EffectRegistry;
  public settings: EffectSettings = {
    bloomEnabled: true,
    bloomIntensity: 1.0,
    dofEnabled: false,
    vignetteEnabled: true,
    noiseEnabled: false,
    chromaticAberrationEnabled: false,
  };

  private constructor() {}

  public static getInstance(): EffectRegistry {
    if (!EffectRegistry.instance) {
      EffectRegistry.instance = new EffectRegistry();
    }
    return EffectRegistry.instance;
  }

  public updateSettings(partial: Partial<EffectSettings>): void {
    this.settings = { ...this.settings, ...partial };
  }
}

export const effectRegistry = EffectRegistry.getInstance();
