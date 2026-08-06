'use client';

import React, { useEffect, useState } from 'react';
import { Center } from '@/components/ui/primitives/Center';
import { Container } from '@/components/ui/layout/Container';
import { Display } from '@/components/ui/typography/Display';
import { LetterReveal } from './LetterReveal';
import { pointerManager } from '@/three/events/PointerManager';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export type TypographyPreset = 'cinematic' | 'magical' | 'gentle';

export interface TypographySequenceProps {
  text: string;
  preset?: TypographyPreset;
  className?: string;
}

export const TypographySequence: React.FC<TypographySequenceProps> = ({
  text,
  preset = 'cinematic',
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<'hidden' | 'fading' | 'revealing' | 'settling' | 'breathing'>(
    () => (prefersReducedMotion ? 'breathing' : 'hidden')
  );

  // Cinematic timing sequence
  useEffect(() => {
    if (prefersReducedMotion) return;

    // 0.0s -> Environment visible
    // 0.8s -> Text begins fading
    const timer1 = setTimeout(() => setPhase('fading'), 800);
    // 1.2s -> Letters reveal
    const timer2 = setTimeout(() => setPhase('revealing'), 1200);
    // 3.5s -> Glow settles
    const timer3 = setTimeout(() => setPhase('settling'), 3500);
    // 4.0s -> Idle breathing begins
    const timer4 = setTimeout(() => setPhase('breathing'), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [prefersReducedMotion]);

  // Subtle parallax tracking state
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    let animId: number;
    const updateParallax = () => {
      setParallax({
        x: pointerManager.x * 12,
        y: pointerManager.y * 8,
      });
      animId = requestAnimationFrame(updateParallax);
    };
    animId = requestAnimationFrame(updateParallax);

    return () => cancelAnimationFrame(animId);
  }, [prefersReducedMotion]);

  return (
    <Center className="fixed inset-0 z-20 h-full w-full pointer-events-none p-6">
      <Container maxWidth="lg" centered>
        <div
          data-preset={preset}
          className={`relative flex flex-col items-center justify-center text-center transition-opacity duration-1000 ease-out will-change-transform ${className}`}
          style={{
            opacity: phase === 'hidden' ? 0 : 1,
            transform: prefersReducedMotion
              ? 'none'
              : `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
          }}
        >
          {/* Layer 1: Blurred Glow Depth Backdrop */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 flex items-center justify-center select-none blur-md opacity-60 animate-pulse pointer-events-none"
            style={{
              transform: 'scale(1.04) translate3d(0, 2px, 0)',
            }}
          >
            <Display
              font="garamond"
              className="text-[clamp(3rem,7vw,6rem)] font-light tracking-[0.2em] text-[#d4af37]"
            >
              {text}
            </Display>
          </div>

          {/* Layer 2: Main Animated Typography */}
          <div
            className={`relative z-10 select-none ${
              phase === 'breathing' ? 'animate-[floatBreathing_7s_easeInOut_infinite]' : ''
            }`}
          >
            <Display
              font="garamond"
              className="text-[clamp(3rem,7vw,6rem)] font-light tracking-[0.2em] leading-tight text-transparent bg-clip-text bg-[linear-gradient(110deg,#ffffff,45%,#d4af37,55%,#ffffff)] bg-[length:250%_100%] animate-[shimmerGradient_18s_linear_infinite]"
              style={{
                filter:
                  phase === 'breathing'
                    ? 'drop-shadow(0 0 16px rgba(212, 175, 55, 0.45))'
                    : 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.25))',
                transition: 'filter 1.5s ease-in-out',
              }}
            >
              {phase === 'hidden' || phase === 'fading' ? (
                <span className="opacity-0">{text}</span>
              ) : prefersReducedMotion ? (
                <span>{text}</span>
              ) : (
                <LetterReveal text={text} delayMs={120} />
              )}
            </Display>
          </div>
        </div>
      </Container>
    </Center>
  );
};
