'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { Box } from './Box';
import { FlexProps } from './types';

const directionMap = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  col: 'flex-col',
  'col-reverse': 'flex-col-reverse',
};

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
};

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const gapMap = {
  none: 'gap-0',
  xs: 'gap-2',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
};

export const Flex = forwardRef<HTMLElement, FlexProps>(
  (
    {
      as = 'div',
      direction = 'row',
      align = 'stretch',
      justify = 'start',
      wrap = 'nowrap',
      gap = 'none',
      className,
      children,
      'data-testid': testId = 'flex-primitive',
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        as={as}
        className={cn(
          'flex',
          directionMap[direction],
          alignMap[align],
          justifyMap[justify],
          wrap === 'wrap' && 'flex-wrap',
          wrap === 'wrap-reverse' && 'flex-wrap-reverse',
          gapMap[gap],
          className
        )}
        data-testid={testId}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Flex.displayName = 'Flex';
