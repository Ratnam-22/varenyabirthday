import { AssetQueue } from './AssetQueue';
import { loadingManager } from './LoadingManager';
import { AssetTask } from './types';

export class Preloader {
  private static instance: Preloader;
  private queue: AssetQueue = new AssetQueue();

  private constructor() {}

  public static getInstance(): Preloader {
    if (!Preloader.instance) {
      Preloader.instance = new Preloader();
    }
    return Preloader.instance;
  }

  public preload(tasks: AssetTask[]): Promise<void> {
    loadingManager.registerItems(tasks.length);
    tasks.forEach((t) => this.queue.enqueue(t));

    return new Promise((resolve) => {
      // Simulate architecture resolution for preloading tasks
      tasks.forEach((t) => {
        this.queue.markLoaded(t.id);
        loadingManager.itemLoaded();
      });
      resolve();
    });
  }
}

export const preloader = Preloader.getInstance();
