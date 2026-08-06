'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { Text } from '../primitives/Text';
import { SubtitleProps } from './types';

export const Subtitle = forwardRef<HTMLElement, SubtitleProps>(
  (
    { as = 'p', className, children, 'data-testid': testId = 'subtitle-component', ...props },
    ref
  ) => {
    return (
      <Text
        ref={ref}
        as={as}
        className={cn(
          'text-lg sm:text-xl md:text-2xl font-light text-[#e6e6fa]/90 tracking-wide font-sans leading-relaxed',
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

Subtitle.displayName = 'Subtitle';
