export class AmbientBus {
  public volume: number = 0.6;
  public isMuted: boolean = false;

  public setVolume(vol: number): void {
    this.volume = Math.max(0, Math.min(1, vol));
  }
}
