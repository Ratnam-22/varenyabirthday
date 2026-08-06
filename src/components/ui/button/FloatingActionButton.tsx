'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { Button } from './Button';
import { FloatingActionButtonProps } from './types';

const positionMap = {
  'bottom-right': 'bottom-6 right-6',
  'bottom-left': 'bottom-6 left-6',
  'top-right': 'top-6 right-6',
  'top-left': 'top-6 left-6',
};

export const FloatingActionButton = forwardRef<HTMLButtonElement, FloatingActionButtonProps>(
  (
    {
      position = 'bottom-right',
      variant = 'primary',
      className,
      children,
      'data-testid': testId = 'fab-component',
      ...props
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn('fixed z-30 shadow-2xl', positionMap[position], className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

FloatingActionButton.displayName = 'FloatingActionButton';
