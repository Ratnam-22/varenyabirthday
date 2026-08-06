'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { Badge } from './Badge';
import { CloseIcon } from '../icon/icons';
import { ChipProps } from './types';

export const Chip = forwardRef<HTMLSpanElement, ChipProps>(
  (
    {
      variant = 'glass',
      onRemove,
      clickable = false,
      className,
      children,
      'data-testid': testId = 'chip-component',
      ...props
    },
    ref
  ) => {
    return (
      <Badge
        ref={ref}
        variant={variant}
        className={cn(
          'inline-flex items-center gap-1.5 px-3 py-1 text-xs select-none',
          clickable && 'cursor-pointer hover:border-white/30',
          className
        )}
        data-testid={testId}
        {...props}
      >
        <span>{children}</span>
        {onRemove && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="hover:opacity-75 focus-ring rounded-full p-0.5"
            aria-label="Remove chip"
          >
            <CloseIcon size="xs" />
          </button>
        )}
      </Badge>
    );
  }
);

Chip.displayName = 'Chip';
