export class PointerManager {
  private static instance: PointerManager;
  public x: number = 0;
  public y: number = 0;
  public isDown: boolean = false;

  private constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('pointermove', this.handleMove);
      window.addEventListener('pointerdown', this.handleDown);
      window.addEventListener('pointerup', this.handleUp);
    }
  }

  public static getInstance(): PointerManager {
    if (!PointerManager.instance) {
      PointerManager.instance = new PointerManager();
    }
    return PointerManager.instance;
  }

  private handleMove = (e: PointerEvent) => {
    this.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  private handleDown = () => {
    this.isDown = true;
  };

  private handleUp = () => {
    this.isDown = false;
  };
}

export const pointerManager = PointerManager.getInstance();
