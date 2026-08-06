export class SFXBus {
  public volume: number = 1.0;
  public isMuted: boolean = false;

  public setVolume(vol: number): void {
    this.volume = Math.max(0, Math.min(1, vol));
  }
}
