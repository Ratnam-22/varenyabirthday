import { cinematicEffectProfile } from './presets/cinematic';
import { magicEffectProfile } from './presets/magic';
import { romanticEffectProfile } from './presets/romantic';
import { minimalEffectProfile } from './presets/minimal';
import { EffectSettings } from '../postprocessing/types';

export type EffectProfileName = 'cinematic' | 'magic' | 'romantic' | 'minimal';

export class MasterEffectRegistry {
  private static instance: MasterEffectRegistry;
  private profiles: Map<EffectProfileName, EffectSettings> = new Map([
    ['cinematic', cinematicEffectProfile],
    ['magic', magicEffectProfile],
    ['romantic', romanticEffectProfile],
    ['minimal', minimalEffectProfile],
  ]);

  private constructor() {}

  public static getInstance(): MasterEffectRegistry {
    if (!MasterEffectRegistry.instance) {
      MasterEffectRegistry.instance = new MasterEffectRegistry();
    }
    return MasterEffectRegistry.instance;
  }

  public getProfile(name: EffectProfileName): EffectSettings {
    return this.profiles.get(name) || minimalEffectProfile;
  }
}

export const masterEffectRegistry = MasterEffectRegistry.getInstance();
