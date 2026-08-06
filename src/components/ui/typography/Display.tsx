'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { Text } from '../primitives/Text';
import { DisplayProps } from './types';

export const Display = forwardRef<HTMLElement, DisplayProps>(
  (
    {
      as = 'h1',
      gradient = true,
      className,
      children,
      'data-testid': testId = 'display-component',
      ...props
    },
    ref
  ) => {
    return (
      <Text
        ref={ref}
        as={as}
        className={cn(
          'font-heading-primary text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-tight',
          gradient && 'text-gradient-gold',
          className
        )}
        data-testid={testId}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

Display.displayName = 'Display';
