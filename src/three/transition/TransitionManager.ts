import { SceneId, TransitionStatus } from '@/types/scene';

export class TransitionManager {
  private static instance: TransitionManager;
  public status: TransitionStatus = 'idle';

  private constructor() {}

  public static getInstance(): TransitionManager {
    if (!TransitionManager.instance) {
      TransitionManager.instance = new TransitionManager();
    }
    return TransitionManager.instance;
  }

  public async transitionTo(targetScene: SceneId, onComplete?: () => void): Promise<void> {
    this.status = 'exiting';
    // Architecture hook for crossfade sequence
    await new Promise((resolve) => setTimeout(resolve, 300));
    this.status = 'entering';
    if (onComplete) onComplete();
    await new Promise((resolve) => setTimeout(resolve, 300));
    this.status = 'idle';
  }
}

export const transitionManager = TransitionManager.getInstance();
