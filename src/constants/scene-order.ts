import { SceneId } from '@/types/scene';

export const SCENE_ORDER: readonly SceneId[] = [
  'invitation',
  'gift',
  'magical-world',
  'wishing-tree',
  'birthday',
  'letter',
  'finale',
] as const;

export const DEFAULT_SCENE: SceneId = 'invitation';
