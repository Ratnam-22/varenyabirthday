'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { Flex } from './Flex';
import { CenterProps } from './types';

export const Center = forwardRef<HTMLElement, CenterProps>(
  (
    {
      inline = false,
      className,
      children,
      'data-testid': testId = 'center-primitive',
      ...props
    },
    ref
  ) => {
    return (
      <Flex
        ref={ref}
        align="center"
        justify="center"
        className={cn(inline ? 'inline-flex' : 'flex', className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

Center.displayName = 'Center';
