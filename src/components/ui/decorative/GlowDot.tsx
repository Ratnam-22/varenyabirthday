'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { glowDotVariants } from './decorativeVariants';
import { GlowDotProps } from './types';

export const GlowDot = forwardRef<HTMLSpanElement, GlowDotProps>(
  (
    {
      color,
      size,
      className,
      'data-testid': testId = 'glow-dot-component',
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(glowDotVariants({ color, size }), className)}
        data-testid={testId}
        {...props}
      />
    );
  }
);

GlowDot.displayName = 'GlowDot';
