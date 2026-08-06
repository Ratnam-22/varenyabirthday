'use client';

import React, { forwardRef } from 'react';
import { GlassCard } from './GlassCard';
import { Heading } from '../typography/Heading';
import { Body } from '../typography/Body';
import { cn } from '@/utils/cn';
import { FeatureCardProps } from './types';

export const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      icon,
      title,
      description,
      className,
      children,
      'data-testid': testId = 'feature-card-component',
      ...props
    },
    ref
  ) => {
    return (
      <GlassCard
        ref={ref}
        variant="feature"
        hoverEffect="glow"
        className={cn('flex flex-col gap-4', className)}
        data-testid={testId}
        {...props}
      >
        {icon && <div className="text-[#d4af37] text-3xl">{icon}</div>}
        {title && <Heading level={3} size="h4" font="garamond">{title}</Heading>}
        {description && <Body variant="muted">{description}</Body>}
        {children}
      </GlassCard>
    );
  }
);

FeatureCard.displayName = 'FeatureCard';
