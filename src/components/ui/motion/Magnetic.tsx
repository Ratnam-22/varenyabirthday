'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { MagneticProps } from './types';

export const Magnetic = forwardRef<HTMLDivElement, MagneticProps>(
  (
    {
      as: Component = 'div',
      className,
      children,
      'data-testid': testId = 'magnetic-motion-component',
      ...props
    },
    ref
  ) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn('inline-block transition-transform duration-200 ease-out', className),
        'data-testid': testId,
        ...props,
      },
      children
    );
  }
);

Magnetic.displayName = 'Magnetic';
