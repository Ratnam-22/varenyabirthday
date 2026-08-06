import * as THREE from 'three';

export interface RendererConfig {
  dpr: number;
  shadows: boolean;
  shadowMapType: THREE.ShadowMapType;
  toneMapping: THREE.ToneMapping;
  toneMappingExposure: number;
  colorSpace: THREE.ColorSpace;
  powerPreference: 'default' | 'high-performance' | 'low-power';
}

export class RendererManager {
  private static instance: RendererManager;
  public config: RendererConfig = {
    dpr: typeof window !== 'undefined' ? Math.min(2, window.devicePixelRatio) : 1,
    shadows: true,
    shadowMapType: THREE.PCFSoftShadowMap,
    toneMapping: THREE.ACESFilmicToneMapping,
    toneMappingExposure: 1.0,
    colorSpace: THREE.SRGBColorSpace,
    powerPreference: 'high-performance',
  };

  private constructor() {}

  public static getInstance(): RendererManager {
    if (!RendererManager.instance) {
      RendererManager.instance = new RendererManager();
    }
    return RendererManager.instance;
  }

  public configureRenderer(renderer: THREE.WebGLRenderer): void {
    renderer.shadowMap.enabled = this.config.shadows;
    renderer.shadowMap.type = this.config.shadowMapType;
    renderer.toneMapping = this.config.toneMapping;
    renderer.toneMappingExposure = this.config.toneMappingExposure;
    renderer.outputColorSpace = this.config.colorSpace;
  }

  public setDpr(dpr: number): void {
    this.config.dpr = Math.max(0.5, Math.min(2, dpr));
  }
}

export const rendererManager = RendererManager.getInstance();
