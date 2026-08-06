'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '@/utils/cn';
import { inputVariants } from './inputVariants';
import { TextInputProps } from './types';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      error,
      helperText,
      id,
      className,
      'data-testid': testId = 'text-input-component',
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-xs font-medium uppercase tracking-wider text-[#a0a0b0]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(inputVariants({ errorState: Boolean(error) }), className)}
          data-testid={testId}
          {...props}
        />
        {error && <span className="text-xs text-red-400">{error}</span>}
        {!error && helperText && <span className="text-xs text-[#a0a0b0]">{helperText}</span>}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
