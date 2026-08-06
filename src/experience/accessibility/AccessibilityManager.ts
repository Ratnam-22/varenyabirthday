export interface AccessibilitySettings {
  reducedMotion: boolean;
  reducedTransparency: boolean;
  highContrast: boolean;
  disableFlashing: boolean;
  keyboardOnly: boolean;
}

export class AccessibilityManager {
  private static instance: AccessibilityManager;
  public settings: AccessibilitySettings = {
    reducedMotion: false,
    reducedTransparency: false,
    highContrast: false,
    disableFlashing: false,
    keyboardOnly: false,
  };

  private constructor() {
    if (typeof window !== 'undefined') {
      this.settings.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.settings.highContrast = window.matchMedia('(forced-colors: active)').matches;
    }
  }

  public static getInstance(): AccessibilityManager {
    if (!AccessibilityManager.instance) {
      AccessibilityManager.instance = new AccessibilityManager();
    }
    return AccessibilityManager.instance;
  }

  public updateSettings(partial: Partial<AccessibilitySettings>): void {
    this.settings = { ...this.settings, ...partial };
  }
}

export const accessibilityManager = AccessibilityManager.getInstance();
