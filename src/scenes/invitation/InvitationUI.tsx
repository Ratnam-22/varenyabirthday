'use client';

import React from 'react';
import { Center } from '@/components/ui/primitives/Center';
import { Container } from '@/components/ui/layout/Container';
import { TypographySequence } from '@/components/ui/typography/effects/TypographySequence';
import { BeginJourneyButton } from './BeginJourneyButton';

export const InvitationUI: React.FC = () => {
  return (
    <Center className="fixed inset-0 z-20 h-full w-full pointer-events-none p-6">
      <Container maxWidth="lg" centered className="flex flex-col items-center justify-center gap-16">
        <TypographySequence text="Welcome..." preset="cinematic" standalone={false} />
        <BeginJourneyButton delayMs={4200} />
      </Container>
    </Center>
  );
};
