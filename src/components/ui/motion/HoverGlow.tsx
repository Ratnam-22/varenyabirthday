'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { HoverGlowProps } from './types';

export const HoverGlow = forwardRef<HTMLDivElement, HoverGlowProps>(
  (
    {
      as: Component = 'div',
      className,
      children,
      'data-testid': testId = 'hover-glow-motion-component',
      ...props
    },
    ref
  ) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn('transition-all duration-500 hover:shadow-[0_0_35px_rgba(212,175,55,0.3)]', className),
        'data-testid': testId,
        ...props,
      },
      children
    );
  }
);

HoverGlow.displayName = 'HoverGlow';
