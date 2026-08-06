import * as THREE from 'three';

export class MaterialManager {
  private static instance: MaterialManager;
  private materials: Map<string, THREE.Material> = new Map();

  private constructor() {}

  public static getInstance(): MaterialManager {
    if (!MaterialManager.instance) {
      MaterialManager.instance = new MaterialManager();
    }
    return MaterialManager.instance;
  }

  public register(key: string, material: THREE.Material): void {
    if (!this.materials.has(key)) {
      this.materials.set(key, material);
    }
  }

  public get(key: string): THREE.Material | undefined {
    return this.materials.get(key);
  }

  public dispose(key: string): void {
    const mat = this.materials.get(key);
    if (mat) {
      mat.dispose();
      this.materials.delete(key);
    }
  }

  public disposeAll(): void {
    this.materials.forEach((mat) => mat.dispose());
    this.materials.clear();
  }
}

export const materialManager = MaterialManager.getInstance();
