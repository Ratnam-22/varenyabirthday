'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { PageWrapperProps } from './types';

export const PageWrapper = forwardRef<HTMLDivElement, PageWrapperProps>(
  (
    {
      className,
      children,
      'data-testid': testId = 'page-wrapper-component',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('relative min-h-screen w-full overflow-hidden bg-[#0a0a0f] text-[#fdfbf7]', className)}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PageWrapper.displayName = 'PageWrapper';
