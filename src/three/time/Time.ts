export class Time {
  private static instance: Time;
  public delta: number = 0;
  public elapsed: number = 0;
  public slowMotion: boolean = false;
  public timeScale: number = 1;
  public isPaused: boolean = false;

  private constructor() {}

  public static getInstance(): Time {
    if (!Time.instance) {
      Time.instance = new Time();
    }
    return Time.instance;
  }

  public update(delta: number): void {
    if (this.isPaused) {
      this.delta = 0;
      return;
    }
    const scaledDelta = delta * this.timeScale * (this.slowMotion ? 0.5 : 1);
    this.delta = scaledDelta;
    this.elapsed += scaledDelta;
  }

  public pause(): void {
    this.isPaused = true;
  }

  public resume(): void {
    this.isPaused = false;
  }

  public setTimeScale(scale: number): void {
    this.timeScale = Math.max(0, scale);
  }

  public setSlowMotion(slow: boolean): void {
    this.slowMotion = slow;
  }
}

export const time = Time.getInstance();
