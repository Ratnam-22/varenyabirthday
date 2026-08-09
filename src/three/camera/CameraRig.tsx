'use client';

import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Vector3, Group, PerspectiveCamera as PerspectiveCameraType } from 'three';
import { pointerManager } from '../events/PointerManager';
import { eventBus } from '../events/EventBus';

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
  const targetZ = useRef(position[2]);
  const isTransitioning = useRef(false);

  useEffect(() => {
    const unsubDolly = eventBus.on('camera:dolly-forward', () => {
      isTransitioning.current = true;
      targetZ.current = 3;
    });

    const unsubReset = eventBus.on('transition:complete', () => {
      isTransitioning.current = false;
      targetZ.current = position[2];
    });

    return () => {
      unsubDolly();
      unsubReset();
    };
  }, [position]);

  useFrame((state) => {
    if (pivotRef.current) {
      const time = state.clock.getElapsedTime();

      // Gentle camera breathing oscillation
      const breathX = isTransitioning.current ? 0 : Math.sin(time * 0.4) * 0.15;
      const breathY = isTransitioning.current ? 0 : Math.cos(time * 0.3) * 0.1;

      // Mouse/touch parallax offset (disabled during transition)
      const parallaxX = isTransitioning.current ? 0 : pointerManager.x * 0.5;
      const parallaxY = isTransitioning.current ? 0 : pointerManager.y * 0.3;

      // Smooth camera position interpolation
      pivotRef.current.position.x +=
        (position[0] + breathX + parallaxX - pivotRef.current.position.x) * 0.05;
      pivotRef.current.position.y +=
        (position[1] + breathY + parallaxY - pivotRef.current.position.y) * 0.05;
      pivotRef.current.position.z +=
        (targetZ.current - pivotRef.current.position.z) * 0.04;

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
