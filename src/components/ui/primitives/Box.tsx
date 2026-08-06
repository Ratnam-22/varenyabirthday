'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { BoxProps } from './types';

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as: Component = 'div', className, children, 'data-testid': testId, ...props }, ref) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn(className),
        'data-testid': testId,
        ...props,
      },
      children
    );
  }
);

Box.displayName = 'Box';
