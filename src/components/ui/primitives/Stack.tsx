'use client';

import React, { forwardRef } from 'react';
import { Flex } from './Flex';
import { StackProps } from './types';

export const Stack = forwardRef<HTMLElement, StackProps>(
  (
    {
      direction = 'col',
      spacing = 'md',
      align = 'stretch',
      className,
      children,
      'data-testid': testId = 'stack-primitive',
      ...props
    },
    ref
  ) => {
    return (
      <Flex
        ref={ref}
        direction={direction}
        align={align}
        gap={spacing}
        className={className}
        data-testid={testId}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

Stack.displayName = 'Stack';
