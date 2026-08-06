import React from 'react';
import { VariantProps } from 'class-variance-authority';
import { headingVariants, typographyVariants } from './typographyVariants';

export interface BaseTypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children?: React.ReactNode;
  'data-testid'?: string;
}

export interface HeadingProps
  extends BaseTypographyProps,
    VariantProps<typeof headingVariants> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface DisplayProps
  extends BaseTypographyProps,
    VariantProps<typeof headingVariants> {}

export interface TitleProps extends BaseTypographyProps {
  level?: 1 | 2 | 3;
}

export type SubtitleProps = BaseTypographyProps;

export interface BodyProps
  extends BaseTypographyProps,
    VariantProps<typeof typographyVariants> {}

export type CaptionProps = BaseTypographyProps;

export type HandwritingProps = BaseTypographyProps;

export interface QuoteProps extends BaseTypographyProps {
  author?: string;
}
