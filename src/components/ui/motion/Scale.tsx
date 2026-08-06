'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { ScaleProps } from './types';

export const Scale = forwardRef<HTMLDivElement, ScaleProps>(
  (
    {
      as: Component = 'div',
      className,
      children,
      'data-testid': testId = 'scale-motion-component',
      ...props
    },
    ref
  ) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn('transition-transform duration-500 ease-out', className),
        'data-testid': testId,
        ...props,
      },
      children
    );
  }
);

Scale.displayName = 'Scale';
