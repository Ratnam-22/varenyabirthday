import { MeshStandardMaterial, Color } from 'three';

export function createRoseGoldMaterial(): MeshStandardMaterial {
  return new MeshStandardMaterial({
    color: new Color('#b76e79'),
    metalness: 0.85,
    roughness: 0.25,
  });
}
