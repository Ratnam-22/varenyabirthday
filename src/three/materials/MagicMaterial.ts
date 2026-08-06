import { MeshStandardMaterial, Color } from 'three';

export function createMagicMaterial(): MeshStandardMaterial {
  return new MeshStandardMaterial({
    color: new Color('#9370db'),
    roughness: 0.3,
    metalness: 0.5,
  });
}
