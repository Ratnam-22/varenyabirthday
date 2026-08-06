import React from 'react';
import { VariantProps } from 'class-variance-authority';
import { backdropVariants } from './overlayVariants';

export interface BackdropProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof backdropVariants> {
  isVisible?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  'data-testid'?: string;
}

export interface BlurLayerProps extends React.HTMLAttributes<HTMLDivElement> {
  blurLevel?: 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
  'data-testid'?: string;
}

export interface GradientOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'top' | 'bottom' | 'radial' | 'vignette';
  'data-testid'?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  'data-testid'?: string;
}

export interface FullscreenOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  children?: React.ReactNode;
  'data-testid'?: string;
}
