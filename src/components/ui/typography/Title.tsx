'use client';

import React, { forwardRef } from 'react';
import { Heading } from './Heading';
import { TitleProps } from './types';

export const Title = forwardRef<HTMLElement, TitleProps>(
  (
    { level = 2, className, children, 'data-testid': testId = 'title-component', ...props },
    ref
  ) => {
    return (
      <Heading
        ref={ref}
        level={level}
        font="garamond"
        className={className}
        data-testid={testId}
        {...props}
      >
        {children}
      </Heading>
    );
  }
);

Title.displayName = 'Title';
