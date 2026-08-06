import React from 'react';
import { VariantProps } from 'class-variance-authority';
import { badgeVariants, glowDotVariants } from './decorativeVariants';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  'data-testid'?: string;
}

export type GradientDividerProps = DividerProps;
export type SeparatorProps = DividerProps;
export type GlassSeparatorProps = DividerProps;

export interface GlowDotProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof glowDotVariants> {
  'data-testid'?: string;
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children?: React.ReactNode;
  'data-testid'?: string;
}

export interface ChipProps extends BadgeProps {
  onRemove?: () => void;
  clickable?: boolean;
}
