import { masterTimeline } from './masterTimeline';

export class AnimationController {
  private static instance: AnimationController;

  private constructor() {}

  public static getInstance(): AnimationController {
    if (!AnimationController.instance) {
      AnimationController.instance = new AnimationController();
    }
    return AnimationController.instance;
  }

  public play(): void {
    masterTimeline.play();
  }

  public pause(): void {
    masterTimeline.pause();
  }

  public seek(progress: number): void {
    masterTimeline.progress(progress);
  }

  public setSpeed(speed: number): void {
    masterTimeline.timeScale(speed);
  }
}

export const animationController = AnimationController.getInstance();
