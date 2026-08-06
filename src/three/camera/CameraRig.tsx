'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Vector3, Group, PerspectiveCamera as PerspectiveCameraType } from 'three';
import { pointerManager } from '../events/PointerManager';

export interface CameraRigProps {
  position?: [number, number, number];
  target?: [number, number, number];
  fov?: number;
  makeDefault?: boolean;
}

export const CameraRig: React.FC<CameraRigProps> = ({
  position = [0, 0, 10],
  target = [0, 0, 0],
  fov = 50,
  makeDefault = true,
}) => {
  const pivotRef = useRef<Group>(null);
  const cameraRef = useRef<PerspectiveCameraType>(null);
  const targetVec = useRef(new Vector3(...target));

  useFrame((state) => {
    if (pivotRef.current) {
      const time = state.clock.getElapsedTime();
      // Gentle camera breathing oscillation
      const breathX = Math.sin(time * 0.4) * 0.15;
      const breathY = Math.cos(time * 0.3) * 0.1;

      // Mouse/touch parallax offset
      const parallaxX = pointerManager.x * 0.5;
      const parallaxY = pointerManager.y * 0.3;

      // Smooth camera position interpolation (breathing + parallax)
      pivotRef.current.position.x += (position[0] + breathX + parallaxX - pivotRef.current.position.x) * 0.05;
      pivotRef.current.position.y += (position[1] + breathY + parallaxY - pivotRef.current.position.y) * 0.05;

      if (cameraRef.current) {
        cameraRef.current.lookAt(targetVec.current);
      }
    }
  });

  return (
    <group ref={pivotRef} position={position}>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault={makeDefault}
        fov={fov}
        near={0.1}
        far={1000}
      />
    </group>
  );
};
