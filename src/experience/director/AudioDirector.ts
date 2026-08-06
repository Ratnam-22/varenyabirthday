import { audioEngine } from '@/three/audio/AudioEngine';

export class AudioDirector {
  public setMasterVolume(vol: number): void {
    audioEngine.musicBus.setVolume(vol);
    audioEngine.sfxBus.setVolume(vol);
    audioEngine.ambientBus.setVolume(vol);
  }
}
