'use client';

import React, { forwardRef } from 'react';
import { Body } from './Body';
import { CaptionProps } from './types';

export const Caption = forwardRef<HTMLElement, CaptionProps>(
  (
    { as = 'span', className, children, 'data-testid': testId = 'caption-component', ...props },
    ref
  ) => {
    return (
      <Body
        ref={ref}
        as={as}
        variant="caption"
        className={className}
        data-testid={testId}
        {...props}
      >
        {children}
      </Body>
    );
  }
);

Caption.displayName = 'Caption';
