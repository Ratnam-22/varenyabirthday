'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { BlurLayerProps } from './types';

const blurMap = {
  sm: 'backdrop-blur-sm',
  md: 'backdrop-blur-md',
  lg: 'backdrop-blur-lg',
  xl: 'backdrop-blur-2xl',
};

export const BlurLayer = forwardRef<HTMLDivElement, BlurLayerProps>(
  (
    {
      blurLevel = 'md',
      className,
      children,
      'data-testid': testId = 'blur-layer-component',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('absolute inset-0 pointer-events-none z-10', blurMap[blurLevel], className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

BlurLayer.displayName = 'BlurLayer';
