import { MeshStandardMaterial, Color } from 'three';

export function createSoftPlasticMaterial(): MeshStandardMaterial {
  return new MeshStandardMaterial({
    color: new Color('#e0e0e0'),
    roughness: 0.5,
    metalness: 0.1,
  });
}
