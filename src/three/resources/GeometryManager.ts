import * as THREE from 'three';

export class GeometryManager {
  private static instance: GeometryManager;
  private geometries: Map<string, THREE.BufferGeometry> = new Map();

  private constructor() {}

  public static getInstance(): GeometryManager {
    if (!GeometryManager.instance) {
      GeometryManager.instance = new GeometryManager();
    }
    return GeometryManager.instance;
  }

  public register(key: string, geometry: THREE.BufferGeometry): void {
    if (!this.geometries.has(key)) {
      this.geometries.set(key, geometry);
    }
  }

  public get(key: string): THREE.BufferGeometry | undefined {
    return this.geometries.get(key);
  }

  public dispose(key: string): void {
    const geo = this.geometries.get(key);
    if (geo) {
      geo.dispose();
      this.geometries.delete(key);
    }
  }

  public disposeAll(): void {
    this.geometries.forEach((geo) => geo.dispose());
    this.geometries.clear();
  }
}

export const geometryManager = GeometryManager.getInstance();
