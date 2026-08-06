'use client';

import React from 'react';
import { cn } from '@/utils/cn';
import { ButtonIconProps } from './types';

export const ButtonIcon: React.FC<ButtonIconProps> = ({ children, className }) => {
  return <span className={cn('inline-flex items-center shrink-0', className)}>{children}</span>;
};
