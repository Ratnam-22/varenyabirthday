import { MeshPhysicalMaterial, Color } from 'three';

export function createCrystalMaterial(): MeshPhysicalMaterial {
  return new MeshPhysicalMaterial({
    roughness: 0.05,
    transmission: 0.95,
    thickness: 2.0,
    ior: 1.8,
    color: new Color('#e6f2ff'),
    transparent: true,
  });
}
