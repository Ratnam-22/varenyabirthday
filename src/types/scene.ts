export type SceneId =
  | 'invitation'
  | 'gift'
  | 'magical-world'
  | 'wishing-tree'
  | 'birthday'
  | 'letter'
  | 'finale';

export type TransitionStatus = 'idle' | 'entering' | 'exiting';

export interface SceneContextType {
  currentScene: SceneId;
  previousScene: SceneId | null;
  transitionStatus: TransitionStatus;
  goToScene: (sceneId: SceneId) => void;
  nextScene: () => void;
  prevScene: () => void;
}

export interface SceneModule {
  id: SceneId;
  name: string;
  Component: React.ComponentType;
}
