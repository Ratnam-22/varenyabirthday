'use client';

import React from 'react';
import { useScene } from '@/hooks/useScene';
import { InvitationUI } from './invitation/InvitationUI';
import { GiftTypography } from './gift/GiftTypography';

export const SceneManager: React.FC = () => {
  const { currentScene } = useScene();

  return (
    <div className="relative h-full w-full pointer-events-none" data-scene={currentScene}>
      {currentScene === 'invitation' && <InvitationUI />}
      {currentScene === 'gift' && <GiftTypography />}
    </div>
  );
};
