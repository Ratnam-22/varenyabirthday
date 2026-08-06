'use client';

import React, { forwardRef } from 'react';
import { Surface } from '../surface/Surface';
import { cn } from '@/utils/cn';
import { cardVariants } from './cardVariants';
import { OverlayCardProps } from './types';

export const OverlayCard = forwardRef<HTMLDivElement, OverlayCardProps>(
  (
    {
      variant = 'overlay',
      hoverEffect = 'none',
      className,
      children,
      'data-testid': testId = 'overlay-card-component',
      ...props
    },
    ref
  ) => {
    return (
      <Surface
        ref={ref}
        variant="elevated"
        radius="xl"
        className={cn(cardVariants({ variant, hoverEffect }), className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </Surface>
    );
  }
);

OverlayCard.displayName = 'OverlayCard';
