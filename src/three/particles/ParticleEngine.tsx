'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, BufferGeometry, Float32BufferAttribute, Color, PointsMaterial } from 'three';
import { ParticlePresetType } from './types';
import { particlePresets } from './particlePresets';
import { eventBus } from '../events/EventBus';

export interface ParticleEngineProps {
  preset?: ParticlePresetType;
  customCount?: number;
}

function pseudoRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export const ParticleEngine: React.FC<ParticleEngineProps> = ({
  preset = 'Fireflies',
  customCount,
}) => {
  const pointsRef = useRef<Points>(null);
  const materialRef = useRef<PointsMaterial>(null);
  const config = particlePresets[preset];
  const count = customCount ?? config.count;
  const speedFactor = useRef(1.0);
  const opacityFactor = useRef(0.8);

  useEffect(() => {
    const unsubSlow = eventBus.on('particle:slowdown', () => {
      speedFactor.current = 0.2;
      opacityFactor.current = 0.3;
    });

    const unsubReset = eventBus.on('transition:complete', () => {
      speedFactor.current = 1.0;
      opacityFactor.current = 0.8;
    });

    return () => {
      unsubSlow();
      unsubReset();
    };
  }, []);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const baseColor = new Color(config.color);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (pseudoRandom(i * 3 + 1) - 0.5) * config.spread[0];
      pos[i * 3 + 1] = (pseudoRandom(i * 3 + 2) - 0.5) * config.spread[1];
      pos[i * 3 + 2] = (pseudoRandom(i * 3 + 3) - 0.5) * config.spread[2];

      col[i * 3] = baseColor.r;
      col[i * 3 + 1] = baseColor.g;
      col[i * 3 + 2] = baseColor.b;
    }
    return [pos, col];
  }, [count, config]);

  const geometry = useMemo(() => {
    const geo = new BufferGeometry();
    geo.setAttribute('position', new Float32BufferAttribute(positions, 3));
    geo.setAttribute('color', new Float32BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y =
        state.clock.getElapsedTime() * config.speed * 0.05 * speedFactor.current;
      pointsRef.current.rotation.x =
        Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05 * speedFactor.current;
    }
    if (materialRef.current) {
      materialRef.current.opacity +=
        (opacityFactor.current - materialRef.current.opacity) * 0.05;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        ref={materialRef}
        size={config.size}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};
