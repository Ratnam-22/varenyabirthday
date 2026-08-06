'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { ToggleProps } from './types';

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      checked = false,
      onChange,
      disabled = false,
      label,
      'aria-label': ariaLabel,
      className,
      'data-testid': testId = 'toggle-component',
    },
    ref
  ) => {
    return (
      <label className="inline-flex items-center gap-3 cursor-pointer select-none">
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={ariaLabel || label}
          disabled={disabled}
          onClick={() => onChange?.(!checked)}
          className={cn(
            'relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-300 focus-ring',
            checked ? 'bg-[#d4af37]' : 'bg-[#1a1b2e] border border-white/10',
            disabled && 'opacity-50 cursor-not-allowed',
            className
          )}
          data-testid={testId}
        >
          <span
            className={cn(
              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300',
              checked ? 'translate-x-6' : 'translate-x-1'
            )}
          />
        </button>
        {label && <span className="text-sm font-medium text-[#fdfbf7]">{label}</span>}
      </label>
    );
  }
);

Toggle.displayName = 'Toggle';
