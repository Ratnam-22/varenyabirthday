import { MeshPhysicalMaterial, Color } from 'three';

export function createGlassMaterial(): MeshPhysicalMaterial {
  return new MeshPhysicalMaterial({
    roughness: 0.1,
    transmission: 0.9,
    thickness: 1.2,
    ior: 1.5,
    color: new Color('#ffffff'),
    transparent: true,
    opacity: 0.8,
  });
}
