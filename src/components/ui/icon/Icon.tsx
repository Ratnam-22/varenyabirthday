'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { IconProps } from './types';

const sizeMap = {
  xs: 'h-3.5 w-3.5',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
};

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      size = 'md',
      spin = false,
      pulse = false,
      className,
      children,
      'aria-hidden': ariaHidden = true,
      'data-testid': testId = 'icon-component',
      ...props
    },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={ariaHidden}
        className={cn(
          'inline-block shrink-0 align-middle',
          sizeMap[size],
          spin && 'animate-spin',
          pulse && 'animate-pulse',
          className
        )}
        data-testid={testId}
        {...props}
      >
        {children}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';
