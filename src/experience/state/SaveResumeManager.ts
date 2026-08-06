import { SceneId } from '@/types/scene';

export interface SavedExperienceState {
  currentScene: SceneId;
  masterVolume: number;
  progressPercentage: number;
}

const STORAGE_KEY = 'varenya_experience_state';

export class SaveResumeManager {
  private static instance: SaveResumeManager;

  private constructor() {}

  public static getInstance(): SaveResumeManager {
    if (!SaveResumeManager.instance) {
      SaveResumeManager.instance = new SaveResumeManager();
    }
    return SaveResumeManager.instance;
  }

  public saveState(state: SavedExperienceState): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }

  public loadState(): SavedExperienceState | null {
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        try {
          return JSON.parse(raw) as SavedExperienceState;
        } catch {
          return null;
        }
      }
    }
    return null;
  }

  public clearState(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}

export const saveResumeManager = SaveResumeManager.getInstance();
