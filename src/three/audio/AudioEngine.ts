import { MusicBus } from './MusicBus';
import { SFXBus } from './SFXBus';
import { AmbientBus } from './AmbientBus';

export class AudioEngine {
  private static instance: AudioEngine;
  public musicBus: MusicBus = new MusicBus();
  public sfxBus: SFXBus = new SFXBus();
  public ambientBus: AmbientBus = new AmbientBus();

  private constructor() {}

  public static getInstance(): AudioEngine {
    if (!AudioEngine.instance) {
      AudioEngine.instance = new AudioEngine();
    }
    return AudioEngine.instance;
  }
}

export const audioEngine = AudioEngine.getInstance();
