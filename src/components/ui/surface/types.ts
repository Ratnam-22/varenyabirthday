import React from 'react';
import { VariantProps } from 'class-variance-authority';
import { surfaceVariants } from './surfaceVariants';

export interface SurfaceProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof surfaceVariants> {
  as?: React.ElementType;
  children?: React.ReactNode;
  'data-testid'?: string;
}
