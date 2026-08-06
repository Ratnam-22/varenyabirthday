'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { backdropVariants } from './overlayVariants';
import { BackdropProps } from './types';

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  (
    {
      isVisible = true,
      intensity,
      onClick,
      className,
      children,
      'data-testid': testId = 'backdrop-component',
      ...props
    },
    ref
  ) => {
    if (!isVisible) return null;

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={cn(backdropVariants({ intensity }), className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Backdrop.displayName = 'Backdrop';
