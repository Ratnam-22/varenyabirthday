'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { surfaceVariants } from './surfaceVariants';
import { SurfaceProps } from './types';

export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  (
    {
      as: Component = 'div',
      variant,
      elevation,
      radius,
      className,
      children,
      'data-testid': testId = 'surface-component',
      ...props
    },
    ref
  ) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn(surfaceVariants({ variant, elevation, radius }), className),
        'data-testid': testId,
        ...props,
      },
      children
    );
  }
);

Surface.displayName = 'Surface';
