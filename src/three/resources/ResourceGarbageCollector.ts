import { resourceManager } from './ResourceManager';

export class ResourceGarbageCollector {
  private static instance: ResourceGarbageCollector;

  private constructor() {}

  public static getInstance(): ResourceGarbageCollector {
    if (!ResourceGarbageCollector.instance) {
      ResourceGarbageCollector.instance = new ResourceGarbageCollector();
    }
    return ResourceGarbageCollector.instance;
  }

  public collectGarbage(): void {
    resourceManager.disposeAll();
  }
}

export const resourceGarbageCollector = ResourceGarbageCollector.getInstance();
