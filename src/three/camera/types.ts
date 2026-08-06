import { Vector3 } from 'three';

export interface CameraRigConfig {
  position: Vector3;
  target: Vector3;
  fov: number;
  near: number;
  far: number;
}
