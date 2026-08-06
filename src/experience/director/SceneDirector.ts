import { SceneId } from '@/types/scene';

export class SceneDirector {
  private activeScene: SceneId = 'invitation';

  public getActiveScene(): SceneId {
    return this.activeScene;
  }

  public setActiveScene(scene: SceneId): void {
    this.activeScene = scene;
  }
}
