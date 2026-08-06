'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { DividerProps } from './types';

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      className,
      'data-testid': testId = 'divider-component',
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
          'bg-white/10 shrink-0',
          orientation === 'horizontal' ? 'h-[1px] w-full' : 'w-[1px] h-full',
          className
        )}
        data-testid={testId}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';
