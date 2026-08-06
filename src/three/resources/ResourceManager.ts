import { textureManager } from './TextureManager';
import { materialManager } from './MaterialManager';
import { geometryManager } from './GeometryManager';

export class ResourceManager {
  private static instance: ResourceManager;

  private constructor() {}

  public static getInstance(): ResourceManager {
    if (!ResourceManager.instance) {
      ResourceManager.instance = new ResourceManager();
    }
    return ResourceManager.instance;
  }

  public disposeAll(): void {
    textureManager.disposeAll();
    materialManager.disposeAll();
    geometryManager.disposeAll();
  }
}

export const resourceManager = ResourceManager.getInstance();
