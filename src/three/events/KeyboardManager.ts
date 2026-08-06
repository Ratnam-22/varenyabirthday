import { eventBus } from './EventBus';

export class KeyboardManager {
  private static instance: KeyboardManager;

  private constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }

  public static getInstance(): KeyboardManager {
    if (!KeyboardManager.instance) {
      KeyboardManager.instance = new KeyboardManager();
    }
    return KeyboardManager.instance;
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    eventBus.emit('keydown', e.key);
    eventBus.emit(`keydown:${e.key.toLowerCase()}`);
  };
}

export const keyboardManager = KeyboardManager.getInstance();
