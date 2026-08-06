'use client';

import React, { forwardRef } from 'react';
import { Surface } from '../surface/Surface';
import { cn } from '@/utils/cn';
import { cardVariants } from './cardVariants';
import { ContentCardProps } from './types';

export const ContentCard = forwardRef<HTMLDivElement, ContentCardProps>(
  (
    {
      variant = 'content',
      hoverEffect = 'lift',
      className,
      children,
      'data-testid': testId = 'content-card-component',
      ...props
    },
    ref
  ) => {
    return (
      <Surface
        ref={ref}
        variant="solid"
        radius="lg"
        className={cn(cardVariants({ variant, hoverEffect }), className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </Surface>
    );
  }
);

ContentCard.displayName = 'ContentCard';
