import { MeshStandardMaterial, Color } from 'three';

export function createGoldMaterial(): MeshStandardMaterial {
  return new MeshStandardMaterial({
    color: new Color('#d4af37'),
    metalness: 0.9,
    roughness: 0.2,
  });
}
