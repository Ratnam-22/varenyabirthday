'use client';

import React from 'react';
import { Center } from '@/components/ui/primitives/Center';
import { Container } from '@/components/ui/layout/Container';
import { Display } from '@/components/ui/typography/Display';
import { GlowText } from '@/components/ui/typography/effects/GlowText';
import { LetterReveal } from '@/components/ui/typography/effects/LetterReveal';
import { Float } from '@/components/ui/motion/Float';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const InvitationTypography: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Center className="fixed inset-0 z-20 h-full w-full pointer-events-none p-6">
      <Container maxWidth="lg" centered>
        <Float>
          <div className="flex flex-col items-center justify-center text-center">
            <Display
              font="garamond"
              gradient="gold"
              className="text-[clamp(3rem,7vw,6rem)] font-light tracking-[0.2em] leading-tight select-none"
            >
              <GlowText glowColor="rgba(212, 175, 55, 0.4)">
                {prefersReducedMotion ? (
                  'Welcome...'
                ) : (
                  <LetterReveal text="Welcome..." delayMs={120} />
                )}
              </GlowText>
            </Display>
          </div>
        </Float>
      </Container>
    </Center>
  );
};
