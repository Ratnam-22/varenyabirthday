'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { containerVariants } from './layoutVariants';
import { ContainerProps } from './types';

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      as: Component = 'div',
      maxWidth,
      centered,
      className,
      children,
      'data-testid': testId = 'container-component',
      ...props
    },
    ref
  ) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn(containerVariants({ maxWidth, centered }), className),
        'data-testid': testId,
        ...props,
      },
      children
    );
  }
);

Container.displayName = 'Container';
