import React from 'react';
import { VariantProps } from 'class-variance-authority';
import { containerVariants, sectionVariants } from './layoutVariants';

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
  children?: React.ReactNode;
  'data-testid'?: string;
}

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: React.ElementType;
  children?: React.ReactNode;
  'data-testid'?: string;
}

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
  'data-testid'?: string;
}

export interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  'data-testid'?: string;
}
