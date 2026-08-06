import { transitionManager } from '@/three/transition/TransitionManager';
import { SceneId } from '@/types/scene';

export class TransitionDirector {
  public async playTransition(targetScene: SceneId, onComplete?: () => void): Promise<void> {
    await transitionManager.transitionTo(targetScene, onComplete);
  }
}
