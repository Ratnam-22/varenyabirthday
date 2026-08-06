import React from 'react';
import { VariantProps } from 'class-variance-authority';
import { cardVariants } from './cardVariants';

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  as?: React.ElementType;
  children?: React.ReactNode;
  'data-testid'?: string;
}

export type GlassCardProps = CardProps;
export interface FeatureCardProps extends CardProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}
export type ContentCardProps = CardProps;
export type OverlayCardProps = CardProps;
export type MagicCardProps = CardProps;
export type AnimatedBorderCardProps = CardProps;
