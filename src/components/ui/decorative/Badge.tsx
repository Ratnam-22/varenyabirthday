'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { badgeVariants } from './decorativeVariants';
import { BadgeProps } from './types';

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant,
      className,
      children,
      'data-testid': testId = 'badge-component',
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
