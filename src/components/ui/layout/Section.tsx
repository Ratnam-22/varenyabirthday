'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { sectionVariants } from './layoutVariants';
import { SectionProps } from './types';

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      as: Component = 'section',
      padding,
      className,
      children,
      'data-testid': testId = 'section-component',
      ...props
    },
    ref
  ) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn(sectionVariants({ padding }), className),
        'data-testid': testId,
        ...props,
      },
      children
    );
  }
);

Section.displayName = 'Section';
