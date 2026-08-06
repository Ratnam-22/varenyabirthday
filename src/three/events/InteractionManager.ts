import { eventBus } from './EventBus';

export class InteractionManager {
  private static instance: InteractionManager;

  private constructor() {}

  public static getInstance(): InteractionManager {
    if (!InteractionManager.instance) {
      InteractionManager.instance = new InteractionManager();
    }
    return InteractionManager.instance;
  }

  public registerInteractable(id: string, onInteract: () => void): () => void {
    return eventBus.on(`interact:${id}`, onInteract);
  }

  public triggerInteract(id: string): void {
    eventBus.emit(`interact:${id}`);
  }
}

export const interactionManager = InteractionManager.getInstance();
