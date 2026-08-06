import React from 'react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  spin?: boolean;
  pulse?: boolean;
  className?: string;
  children?: React.ReactNode;
  'data-testid'?: string;
}
