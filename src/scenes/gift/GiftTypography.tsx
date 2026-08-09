'use client';

import React, { useState, useEffect } from 'react';
import { TypographySequence } from '@/components/ui/typography/effects/TypographySequence';
import { eventBus } from '@/three/events/EventBus';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const GiftTypography: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [shouldShow, setShouldShow] = useState(() => prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const unsub = eventBus.on('gift:discovered', () => {
      setShouldShow(true);
    });

    return () => {
      unsub();
    };
  }, [prefersReducedMotion]);

  if (!shouldShow) return null;

  return <TypographySequence text="There's something here for you..." preset="cinematic" />;
};
