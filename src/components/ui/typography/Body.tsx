'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { Text } from '../primitives/Text';
import { typographyVariants } from './typographyVariants';
import { BodyProps } from './types';

export const Body = forwardRef<HTMLElement, BodyProps>(
  (
    {
      as = 'p',
      variant = 'body',
      className,
      children,
      'data-testid': testId = 'body-component',
      ...props
    },
    ref
  ) => {
    return (
      <Text
        ref={ref}
        as={as}
        className={cn(typographyVariants({ variant }), className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

Body.displayName = 'Body';
