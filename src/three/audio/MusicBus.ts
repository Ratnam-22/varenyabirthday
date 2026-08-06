export class MusicBus {
  public volume: number = 0.8;
  public isMuted: boolean = false;

  public setVolume(vol: number): void {
    this.volume = Math.max(0, Math.min(1, vol));
  }
}
