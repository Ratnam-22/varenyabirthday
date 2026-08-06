'use client';

import React, { forwardRef } from 'react';
import { Surface } from '../surface/Surface';
import { cn } from '@/utils/cn';
import { cardVariants } from './cardVariants';
import { MagicCardProps } from './types';

export const MagicCard = forwardRef<HTMLDivElement, MagicCardProps>(
  (
    {
      variant = 'magic',
      hoverEffect = 'glow',
      className,
      children,
      'data-testid': testId = 'magic-card-component',
      ...props
    },
    ref
  ) => {
    return (
      <Surface
        ref={ref}
        variant="magic"
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

MagicCard.displayName = 'MagicCard';
