export class PhotoModeManager {
  private static instance: PhotoModeManager;
  public isActive: boolean = false;

  private constructor() {}

  public static getInstance(): PhotoModeManager {
    if (!PhotoModeManager.instance) {
      PhotoModeManager.instance = new PhotoModeManager();
    }
    return PhotoModeManager.instance;
  }

  public enterPhotoMode(): void {
    this.isActive = true;
  }

  public exitPhotoMode(): void {
    this.isActive = false;
  }

  public captureScreenshot(canvas: HTMLCanvasElement): string {
    return canvas.toDataURL('image/png');
  }
}

export const photoModeManager = PhotoModeManager.getInstance();
