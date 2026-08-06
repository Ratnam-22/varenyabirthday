import * as THREE from 'three';

export class TextureManager {
  private static instance: TextureManager;
  private textures: Map<string, THREE.Texture> = new Map();

  private constructor() {}

  public static getInstance(): TextureManager {
    if (!TextureManager.instance) {
      TextureManager.instance = new TextureManager();
    }
    return TextureManager.instance;
  }

  public register(key: string, texture: THREE.Texture): void {
    if (!this.textures.has(key)) {
      this.textures.set(key, texture);
    }
  }

  public get(key: string): THREE.Texture | undefined {
    return this.textures.get(key);
  }

  public dispose(key: string): void {
    const texture = this.textures.get(key);
    if (texture) {
      texture.dispose();
      this.textures.delete(key);
    }
  }

  public disposeAll(): void {
    this.textures.forEach((texture) => texture.dispose());
    this.textures.clear();
  }
}

export const textureManager = TextureManager.getInstance();
