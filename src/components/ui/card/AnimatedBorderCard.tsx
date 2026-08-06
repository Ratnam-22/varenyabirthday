'use client';

import React, { forwardRef } from 'react';
import { Surface } from '../surface/Surface';
import { cn } from '@/utils/cn';
import { cardVariants } from './cardVariants';
import { AnimatedBorderCardProps } from './types';

export const AnimatedBorderCard = forwardRef<HTMLDivElement, AnimatedBorderCardProps>(
  (
    {
      variant = 'animatedBorder',
      hoverEffect = 'scale',
      className,
      children,
      'data-testid': testId = 'animated-border-card-component',
      ...props
    },
    ref
  ) => {
    return (
      <Surface
        ref={ref}
        variant="solid"
        radius="lg"
        className={cn(cardVariants({ variant, hoverEffect }), 'glow-border-gold', className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </Surface>
    );
  }
);

AnimatedBorderCard.displayName = 'AnimatedBorderCard';
