import { Assets } from '@/config/assets';
import { preloader } from './Preloader';
import { AssetTask } from './types';

export class AssetLoader {
  private static instance: AssetLoader;

  private constructor() {}

  public static getInstance(): AssetLoader {
    if (!AssetLoader.instance) {
      AssetLoader.instance = new AssetLoader();
    }
    return AssetLoader.instance;
  }

  public async preloadManifest(): Promise<void> {
    const tasks: AssetTask[] = [];

    Object.entries(Assets.models).forEach(([id, url]) => {
      tasks.push({ id, url, type: 'model', loaded: false });
    });
    Object.entries(Assets.textures).forEach(([id, url]) => {
      tasks.push({ id, url, type: 'texture', loaded: false });
    });
    Object.entries(Assets.hdr).forEach(([id, url]) => {
      tasks.push({ id, url, type: 'hdr', loaded: false });
    });

    if (tasks.length > 0) {
      await preloader.preload(tasks);
    }
  }
}

export const assetLoader = AssetLoader.getInstance();
