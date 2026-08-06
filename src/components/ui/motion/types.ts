import React from 'react';

export interface BaseMotionProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  delay?: number;
  duration?: number;
  children?: React.ReactNode;
  'data-testid'?: string;
}

export interface FadeProps extends BaseMotionProps {
  direction?: 'in' | 'out' | 'up' | 'down' | 'left' | 'right';
}

export interface RevealProps extends BaseMotionProps {
  stagger?: number;
}

export interface ScaleProps extends BaseMotionProps {
  from?: number;
  to?: number;
}

export interface FloatProps extends BaseMotionProps {
  distance?: number;
  speed?: number;
}

export interface ParallaxProps extends BaseMotionProps {
  speed?: number;
}

export interface MagneticProps extends BaseMotionProps {
  strength?: number;
}

export interface HoverGlowProps extends BaseMotionProps {
  color?: string;
}
