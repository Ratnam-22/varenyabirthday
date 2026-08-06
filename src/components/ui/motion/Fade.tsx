'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { FadeProps } from './types';

export const Fade = forwardRef<HTMLDivElement, FadeProps>(
  (
    {
      as: Component = 'div',
      direction = 'up',
      className,
      children,
      'data-testid': testId = 'fade-motion-component',
      ...props
    },
    ref
  ) => {
    return React.createElement(
      Component,
      {
        ref,
        'data-direction': direction,
        className: cn('transition-all duration-700 ease-out', className),
        'data-testid': testId,
        ...props,
      },
      children
    );
  }
);

Fade.displayName = 'Fade';
