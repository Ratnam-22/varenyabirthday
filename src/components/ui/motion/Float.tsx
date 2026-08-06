'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { FloatProps } from './types';

export const Float = forwardRef<HTMLDivElement, FloatProps>(
  (
    {
      as: Component = 'div',
      className,
      children,
      'data-testid': testId = 'float-motion-component',
      ...props
    },
    ref
  ) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn('animate-pulse transition-transform duration-1000', className),
        'data-testid': testId,
        ...props,
      },
      children
    );
  }
);

Float.displayName = 'Float';
