'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { buttonVariants } from './buttonVariants';
import { LoadingSpinner } from './LoadingSpinner';
import { ButtonIcon } from './ButtonIcon';
import { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as: Component = 'button',
      variant,
      size,
      fullWidth,
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      className,
      children,
      'data-testid': testId = 'button-component',
      ...props
    },
    ref
  ) => {
    const isButtonDisabled = disabled || isLoading;

    return React.createElement(
      Component,
      {
        ref,
        disabled: isButtonDisabled,
        className: cn(buttonVariants({ variant, size, fullWidth }), className),
        'data-testid': testId,
        ...props,
      },
      isLoading && <LoadingSpinner size={size === 'lg' ? 'lg' : 'sm'} className="mr-2" />,
      !isLoading && leftIcon && <ButtonIcon className="mr-2">{leftIcon}</ButtonIcon>,
      <span>{children}</span>,
      !isLoading && rightIcon && <ButtonIcon className="ml-2">{rightIcon}</ButtonIcon>
    );
  }
);

Button.displayName = 'Button';
