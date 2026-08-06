'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { Box } from '../primitives/Box';
import { QuoteProps } from './types';

export const Quote = forwardRef<HTMLElement, QuoteProps>(
  (
    {
      author,
      className,
      children,
      'data-testid': testId = 'quote-component',
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        as="blockquote"
        className={cn(
          'border-l-2 border-[#d4af37] pl-6 py-2 italic font-serif text-lg sm:text-xl text-[#e6e6fa]',
          className
        )}
        data-testid={testId}
        {...props}
      >
        <p>{children}</p>
        {author && (
          <footer className="mt-2 text-sm not-italic font-sans text-[#a0a0b0]">
            — {author}
          </footer>
        )}
      </Box>
    );
  }
);

Quote.displayName = 'Quote';
