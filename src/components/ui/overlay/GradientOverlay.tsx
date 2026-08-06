'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { GradientOverlayProps } from './types';

const variantMap = {
  top: 'bg-gradient-to-b from-[#0a0a0f] to-transparent',
  bottom: 'bg-gradient-to-t from-[#0a0a0f] to-transparent',
  radial: 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0a0a0f]/60 to-[#0a0a0f]',
  vignette: 'shadow-[inset_0_0_100px_rgba(10,10,15,0.8)]',
};

export const GradientOverlay = forwardRef<HTMLDivElement, GradientOverlayProps>(
  (
    {
      variant = 'radial',
      className,
      'data-testid': testId = 'gradient-overlay-component',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('absolute inset-0 pointer-events-none z-10', variantMap[variant], className)}
        data-testid={testId}
        {...props}
      />
    );
  }
);

GradientOverlay.displayName = 'GradientOverlay';
