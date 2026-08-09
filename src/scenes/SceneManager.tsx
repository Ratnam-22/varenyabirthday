'use client';

import React from 'react';
import { useScene } from '@/hooks/useScene';
import { Center } from '@/components/ui/primitives/Center';
import { Container } from '@/components/ui/layout/Container';
import { InvitationUI } from './invitation/InvitationUI';
import { GiftTypography } from './gift/GiftTypography';
import { OpenGiftButton } from './gift/OpenGiftButton';

export const SceneManager: React.FC = () => {
  const { currentScene } = useScene();

  return (
    <div className="relative h-full w-full pointer-events-none" data-scene={currentScene} data-scene-ui>
      {currentScene === 'invitation' && <InvitationUI />}
      {currentScene === 'gift' && (
        <Center className="fixed inset-0 z-20 h-full w-full pointer-events-none p-6">
          <Container maxWidth="lg" centered className="flex flex-col items-center justify-center gap-12">
            <GiftTypography />
            <OpenGiftButton />
          </Container>
        </Center>
      )}
    </div>
  );
};
