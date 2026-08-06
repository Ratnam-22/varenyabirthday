import { LoadingProgress } from './types';

export class LoadingManager {
  private static instance: LoadingManager;
  private totalItems: number = 0;
  private loadedItems: number = 0;
  private callbacks: Set<(progress: LoadingProgress) => void> = new Set();
  private cachedProgress: LoadingProgress = {
    total: 0,
    loaded: 0,
    percentage: 100,
    isLoading: false,
  };

  private constructor() {}

  public static getInstance(): LoadingManager {
    if (!LoadingManager.instance) {
      LoadingManager.instance = new LoadingManager();
    }
    return LoadingManager.instance;
  }

  public registerItems(count: number): void {
    this.totalItems += count;
    this.updateCachedProgress();
    this.notify();
  }

  public itemLoaded(): void {
    this.loadedItems += 1;
    this.updateCachedProgress();
    this.notify();
  }

  private updateCachedProgress(): void {
    const percentage =
      this.totalItems === 0 ? 100 : Math.round((this.loadedItems / this.totalItems) * 100);
    this.cachedProgress = {
      total: this.totalItems,
      loaded: this.loadedItems,
      percentage,
      isLoading: this.loadedItems < this.totalItems,
    };
  }

  public getProgress(): LoadingProgress {
    return this.cachedProgress;
  }

  public subscribe(cb: (progress: LoadingProgress) => void): () => void {
    this.callbacks.add(cb);
    return () => {
      this.callbacks.delete(cb);
    };
  }

  private notify(): void {
    this.callbacks.forEach((cb) => cb(this.cachedProgress));
  }
}

export const loadingManager = LoadingManager.getInstance();
