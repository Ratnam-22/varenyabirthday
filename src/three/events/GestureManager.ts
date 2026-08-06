import { eventBus } from './EventBus';

export class GestureManager {
  private static instance: GestureManager;

  private constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('touchstart', this.handleTouchStart);
      window.addEventListener('touchend', this.handleTouchEnd);
    }
  }

  public static getInstance(): GestureManager {
    if (!GestureManager.instance) {
      GestureManager.instance = new GestureManager();
    }
    return GestureManager.instance;
  }

  private handleTouchStart = () => {
    eventBus.emit('touchstart');
  };

  private handleTouchEnd = () => {
    eventBus.emit('touchend');
  };
}

export const gestureManager = GestureManager.getInstance();
