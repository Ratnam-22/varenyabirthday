'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { RevealProps } from './types';

export const Reveal = forwardRef<HTMLDivElement, RevealProps>(
  (
    {
      as: Component = 'div',
      className,
      children,
      'data-testid': testId = 'reveal-motion-component',
      ...props
    },
    ref
  ) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn('transition-all duration-700 ease-out overflow-hidden', className),
        'data-testid': testId,
        ...props,
      },
      children
    );
  }
);

Reveal.displayName = 'Reveal';
