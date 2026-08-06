'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '@/utils/cn';
import { SliderProps } from './types';

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      label,
      min = 0,
      max = 100,
      step = 1,
      value,
      id,
      className,
      'data-testid': testId = 'slider-component',
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const sliderId = id || generatedId;

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label htmlFor={sliderId} className="text-xs font-medium uppercase tracking-wider text-[#a0a0b0]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={sliderId}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          className={cn(
            'h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#1a1b2e] accent-[#d4af37] focus-ring',
            className
          )}
          data-testid={testId}
          {...props}
        />
      </div>
    );
  }
);

Slider.displayName = 'Slider';
