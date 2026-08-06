'use client';

import React, { forwardRef } from 'react';
import { Surface } from '../surface/Surface';
import { cn } from '@/utils/cn';
import { cardVariants } from './cardVariants';
import { GlassCardProps } from './types';

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      variant = 'glass',
      hoverEffect = 'lift',
      className,
      children,
      'data-testid': testId = 'glass-card-component',
      ...props
    },
    ref
  ) => {
    return (
      <Surface
        ref={ref}
        variant="glass"
        radius="lg"
        className={cn(cardVariants({ variant, hoverEffect }), className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </Surface>
    );
  }
);

GlassCard.displayName = 'GlassCard';
