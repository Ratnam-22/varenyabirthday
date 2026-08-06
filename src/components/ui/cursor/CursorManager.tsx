'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export type CursorState = 'default' | 'magnetic' | 'sparkle' | 'interactive';

export interface CursorManagerProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: CursorState;
  'data-testid'?: string;
}

export const CursorManager = forwardRef<HTMLDivElement, CursorManagerProps>(
  (
    {
      state = 'default',
      className,
      children,
      'data-testid': testId = 'cursor-manager-component',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-cursor-state={state}
        className={cn('pointer-events-none fixed inset-0 z-50', className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CursorManager.displayName = 'CursorManager';
