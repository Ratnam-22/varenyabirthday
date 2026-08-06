'use client';

import React from 'react';
import { cn } from '@/utils/cn';

export interface GlowTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  glowColor?: string;
}

export const GlowText: React.FC<GlowTextProps> = ({
  glowColor = 'rgba(212, 175, 55, 0.6)',
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn('transition-all duration-500', className)}
      style={{ textShadow: `0 0 12px ${glowColor}, 0 0 24px ${glowColor}` }}
      {...props}
    >
      {children}
    </span>
  );
};
