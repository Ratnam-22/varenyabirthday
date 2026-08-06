'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { GradientDividerProps } from './types';

export const GradientDivider = forwardRef<HTMLDivElement, GradientDividerProps>(
  (
    {
      orientation = 'horizontal',
      className,
      'data-testid': testId = 'gradient-divider-component',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(
          'shrink-0',
          orientation === 'horizontal'
            ? 'h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent'
            : 'w-[1px] h-full bg-gradient-to-b from-transparent via-[#d4af37]/60 to-transparent',
          className
        )}
        data-testid={testId}
        {...props}
      />
    );
  }
);

GradientDivider.displayName = 'GradientDivider';
