'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { ButtonGroupProps } from './types';

const spacingMap = {
  none: 'gap-0',
  sm: 'gap-2',
  md: 'gap-4',
};

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      direction = 'row',
      spacing = 'sm',
      className,
      children,
      'data-testid': testId = 'button-group-component',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="group"
        className={cn(
          'inline-flex flex-wrap items-center',
          direction === 'col' ? 'flex-col' : 'flex-row',
          spacingMap[spacing],
          className
        )}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';
