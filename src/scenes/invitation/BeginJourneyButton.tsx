'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button/Button';
import { Magnetic } from '@/components/ui/motion/Magnetic';
import { Float } from '@/components/ui/motion/Float';
import { eventBus } from '@/three/events/EventBus';
import { experienceStateMachine } from '@/experience/state/ExperienceStateMachine';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface BeginJourneyButtonProps {
  delayMs?: number;
  onAction?: () => void;
  className?: string;
}

export const BeginJourneyButton: React.FC<BeginJourneyButtonProps> = ({
  delayMs = 4000,
  onAction,
  className,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(() => prefersReducedMotion);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs, prefersReducedMotion]);

  const handleMouseEnter = () => {
    eventBus.emit('particle:sparkle');
  };

  const handleClick = () => {
    setIsPressed(true);
    eventBus.emit('particle:burst');
    eventBus.emit('action:begin-journey');
    experienceStateMachine.setState('Interacting');

    if (onAction) {
      onAction();
    }

    setTimeout(() => {
      setIsPressed(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'transition-all duration-1000 ease-out pointer-events-auto will-change-transform',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        className
      )}
    >
      <Magnetic>
        <Float>
          <Button
            variant="glass"
            size="lg"
            role="button"
            aria-label="Begin Journey"
            onMouseEnter={handleMouseEnter}
            onClick={handleClick}
            className={cn(
              'relative group overflow-hidden px-10 py-4 text-base font-light tracking-[0.25em] uppercase text-[#fdfbf7]',
              'border border-[rgba(212,175,55,0.3)] bg-[rgba(18,19,28,0.65)] backdrop-blur-md rounded-full',
              'transition-all duration-500 ease-out focus-ring',
              'hover:border-[rgba(212,175,55,0.7)] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:-translate-y-0.5',
              isPressed ? 'scale-95 duration-150' : 'scale-100'
            )}
            data-cursor-state="interactive"
          >
            {/* Animated Gold Shimmer Border Accent */}
            <span
              aria-hidden="true"
              className="absolute inset-0 z-0 bg-[linear-gradient(110deg,transparent,35%,rgba(212,175,55,0.4),50%,transparent)] bg-[length:200%_100%] animate-[shimmerGradient_12s_linear_infinite] opacity-60 group-hover:opacity-100"
            />

            {/* Button Label */}
            <span className="relative z-10 text-gradient-gold font-sans font-medium">
              Begin Journey
            </span>
          </Button>
        </Float>
      </Magnetic>
    </div>
  );
};
