import { LoadingProgress } from './types';

export class LoadingManager {
  private static instance: LoadingManager;
  private totalItems: number = 0;
  private loadedItems: number = 0;
  private callbacks: Set<(progress: LoadingProgress) => void> = new Set();

  private constructor() {}

  public static getInstance(): LoadingManager {
    if (!LoadingManager.instance) {
      LoadingManager.instance = new LoadingManager();
    }
    return LoadingManager.instance;
  }

  public registerItems(count: number): void {
    this.totalItems += count;
    this.notify();
  }

  public itemLoaded(): void {
    this.loadedItems += 1;
    this.notify();
  }

  public getProgress(): LoadingProgress {
    const percentage = this.totalItems === 0 ? 100 : Math.round((this.loadedItems / this.totalItems) * 100);
    return {
      total: this.totalItems,
      loaded: this.loadedItems,
      percentage,
      isLoading: this.loadedItems < this.totalItems,
    };
  }

  public subscribe(cb: (progress: LoadingProgress) => void): () => void {
    this.callbacks.add(cb);
    cb(this.getProgress());
    return () => this.callbacks.delete(cb);
  }

  private notify(): void {
    const progress = this.getProgress();
    this.callbacks.forEach((cb) => cb(progress));
  }
}

export const loadingManager = LoadingManager.getInstance();
