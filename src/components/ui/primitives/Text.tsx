'use client';

import React, { forwardRef } from 'react';
import { Box } from './Box';
import { TextPrimitiveProps } from './types';

export const Text = forwardRef<HTMLElement, TextPrimitiveProps>(
  ({ as = 'p', className, children, 'data-testid': testId = 'text-primitive', ...props }, ref) => {
    return (
      <Box ref={ref} as={as} className={className} data-testid={testId} {...props}>
        {children}
      </Box>
    );
  }
);

Text.displayName = 'Text';
