'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { GlassSeparatorProps } from './types';

export const GlassSeparator = forwardRef<HTMLDivElement, GlassSeparatorProps>(
  (
    {
      orientation = 'horizontal',
      className,
      'data-testid': testId = 'glass-separator-component',
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
          'bg-white/12 backdrop-blur-md shrink-0 border-t border-white/5',
          orientation === 'horizontal' ? 'h-[1px] w-full' : 'w-[1px] h-full',
          className
        )}
        data-testid={testId}
        {...props}
      />
    );
  }
);

GlassSeparator.displayName = 'GlassSeparator';
