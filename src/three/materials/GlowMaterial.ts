import { MeshBasicMaterial, Color } from 'three';

export function createGlowMaterial(colorHex: string = '#ffd700'): MeshBasicMaterial {
  return new MeshBasicMaterial({
    color: new Color(colorHex),
    transparent: true,
    opacity: 0.9,
  });
}
