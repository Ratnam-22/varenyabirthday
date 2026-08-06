'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { Text } from '../primitives/Text';
import { headingVariants } from './typographyVariants';
import { HeadingProps } from './types';

export const Heading = forwardRef<HTMLElement, HeadingProps>(
  (
    {
      as,
      level = 2,
      font,
      size,
      gradient,
      className,
      children,
      'data-testid': testId = 'heading-component',
      ...props
    },
    ref
  ) => {
    const Component = as || (`h${level}` as React.ElementType);
    const sizeVariant = size || (`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6');

    return (
      <Text
        ref={ref}
        as={Component}
        className={cn(headingVariants({ font, size: sizeVariant, gradient }), className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

Heading.displayName = 'Heading';
