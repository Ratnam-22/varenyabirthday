'use client';

import React, { forwardRef } from 'react';
import { Divider } from './Divider';
import { SeparatorProps } from './types';

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ 'data-testid': testId = 'separator-component', ...props }, ref) => {
    return <Divider ref={ref} data-testid={testId} {...props} />;
  }
);

Separator.displayName = 'Separator';
