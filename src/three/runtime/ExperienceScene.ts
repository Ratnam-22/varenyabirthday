import { SceneId } from '@/types/scene';

export interface ExperienceScene {
  id: SceneId;
  preload(): Promise<void>;
  mount(): void;
  unmount(): void;
  dispose(): void;
  update(delta: number, elapsed: number): void;
}
