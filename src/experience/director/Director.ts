import { SceneDirector } from './SceneDirector';
import { CameraDirector } from './CameraDirector';
import { AudioDirector } from './AudioDirector';
import { TransitionDirector } from './TransitionDirector';
import { SceneId } from '@/types/scene';

export class Director {
  private static instance: Director;
  public sceneDirector: SceneDirector = new SceneDirector();
  public cameraDirector: CameraDirector = new CameraDirector();
  public audioDirector: AudioDirector = new AudioDirector();
  public transitionDirector: TransitionDirector = new TransitionDirector();

  private constructor() {}

  public static getInstance(): Director {
    if (!Director.instance) {
      Director.instance = new Director();
    }
    return Director.instance;
  }

  public async orchestrateSceneChange(targetScene: SceneId): Promise<void> {
    await this.transitionDirector.playTransition(targetScene, () => {
      this.sceneDirector.setActiveScene(targetScene);
    });
  }
}

export const director = Director.getInstance();
