'use client';

import { useState, useEffect, useRef } from 'react';
import { pointerManager } from '@/three/events/PointerManager';
import { eventBus } from '@/three/events/EventBus';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface GiftInteractionState {
  isDiscovered: boolean;
  interactionProgress: number;
}

export function useGiftInteraction() {
  const prefersReducedMotion = useReducedMotion();
  const [isDiscovered, setIsDiscovered] = useState(prefersReducedMotion);
  const [interactionProgress, setInteractionProgress] = useState(prefersReducedMotion ? 1 : 0);

  const cumulativeDistance = useRef(0);
  const lastX = useRef(pointerManager.x);
  const lastY = useRef(pointerManager.y);
  const hasFiredDiscovery = useRef(false);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      if (!hasFiredDiscovery.current) {
        hasFiredDiscovery.current = true;
        eventBus.emit('gift:discovered');
      }
      return;
    }

    const checkInteraction = () => {
      const currentX = pointerManager.x;
      const currentY = pointerManager.y;

      const dx = currentX - lastX.current;
      const dy = currentY - lastY.current;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 0.001) {
        cumulativeDistance.current += dist;
        lastX.current = currentX;
        lastY.current = currentY;

        const progress = Math.min(1, cumulativeDistance.current / 2.5);
        setInteractionProgress(progress);

        if (progress >= 1 && !hasFiredDiscovery.current) {
          hasFiredDiscovery.current = true;
          setIsDiscovered(true);
          eventBus.emit('gift:discovered');
        }
      }

      animFrameId.current = requestAnimationFrame(checkInteraction);
    };

    animFrameId.current = requestAnimationFrame(checkInteraction);

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [prefersReducedMotion]);

  return {
    isDiscovered,
    interactionProgress,
  };
}
