'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { FullscreenOverlayProps } from './types';

export const FullscreenOverlay = forwardRef<HTMLDivElement, FullscreenOverlayProps>(
  (
    {
      isOpen = true,
      className,
      children,
      'data-testid': testId = 'fullscreen-overlay-component',
      ...props
    },
    ref
  ) => {
    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={cn(
          'fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#0a0a0f]/90 backdrop-blur-2xl text-[#fdfbf7] p-6',
          className
        )}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FullscreenOverlay.displayName = 'FullscreenOverlay';
