'use client';

import { Vector3 } from 'three';

export function useCamera() {
  return {
    defaultPosition: new Vector3(0, 0, 10),
    defaultTarget: new Vector3(0, 0, 0),
    defaultFov: 50,
  };
}
