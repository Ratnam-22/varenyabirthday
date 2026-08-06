'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { Text } from '../primitives/Text';
import { HandwritingProps } from './types';

export const Handwriting = forwardRef<HTMLElement, HandwritingProps>(
  (
    {
      as = 'span',
      className,
      children,
      'data-testid': testId = 'handwriting-component',
      ...props
    },
    ref
  ) => {
    return (
      <Text
        ref={ref}
        as={as}
        className={cn('font-handwriting text-2xl sm:text-3xl text-[#d4af37]', className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

Handwriting.displayName = 'Handwriting';
