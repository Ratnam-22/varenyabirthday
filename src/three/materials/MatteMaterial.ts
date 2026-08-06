import { MeshStandardMaterial, Color } from 'three';

export function createMatteMaterial(colorHex: string = '#1a1a24'): MeshStandardMaterial {
  return new MeshStandardMaterial({
    color: new Color(colorHex),
    roughness: 0.9,
    metalness: 0.0,
  });
}
