'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { ParallaxProps } from './types';

export const Parallax = forwardRef<HTMLDivElement, ParallaxProps>(
  (
    {
      as: Component = 'div',
      className,
      children,
      'data-testid': testId = 'parallax-motion-component',
      ...props
    },
    ref
  ) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn('will-change-transform transition-transform duration-300', className),
        'data-testid': testId,
        ...props,
      },
      children
    );
  }
);

Parallax.displayName = 'Parallax';
