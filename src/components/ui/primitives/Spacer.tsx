'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { Box } from './Box';
import { SpacerProps } from './types';

const sizeMap = {
  xs: 'h-2 w-2',
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
};

export const Spacer = forwardRef<HTMLElement, SpacerProps>(
  (
    {
      size = 'md',
      axis = 'vertical',
      className,
      'data-testid': testId = 'spacer-primitive',
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        aria-hidden="true"
        className={cn(
          axis === 'vertical' ? 'w-full' : 'h-full',
          sizeMap[size],
          className
        )}
        data-testid={testId}
        {...props}
      />
    );
  }
);

Spacer.displayName = 'Spacer';
