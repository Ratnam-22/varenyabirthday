export type ColorGradingPreset = 'Warm' | 'Cold' | 'GoldenHour' | 'Dream' | 'Night' | 'Celebration';

export interface ColorGradingConfig {
  exposure: number;
  contrast: number;
  saturation: number;
}

const colorGradingPresets: Record<ColorGradingPreset, ColorGradingConfig> = {
  Warm: { exposure: 1.0, contrast: 1.1, saturation: 1.2 },
  Cold: { exposure: 0.9, contrast: 1.0, saturation: 0.8 },
  GoldenHour: { exposure: 1.15, contrast: 1.15, saturation: 1.3 },
  Dream: { exposure: 1.05, contrast: 0.9, saturation: 1.1 },
  Night: { exposure: 0.7, contrast: 1.2, saturation: 0.9 },
  Celebration: { exposure: 1.2, contrast: 1.2, saturation: 1.4 },
};

export class ColorGradingManager {
  private static instance: ColorGradingManager;
  public activePreset: ColorGradingPreset = 'Night';

  private constructor() {}

  public static getInstance(): ColorGradingManager {
    if (!ColorGradingManager.instance) {
      ColorGradingManager.instance = new ColorGradingManager();
    }
    return ColorGradingManager.instance;
  }

  public getPresetConfig(preset?: ColorGradingPreset): ColorGradingConfig {
    return colorGradingPresets[preset || this.activePreset];
  }
}

export const colorGradingManager = ColorGradingManager.getInstance();
