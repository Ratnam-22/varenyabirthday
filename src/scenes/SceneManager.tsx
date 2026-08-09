'use client';

import React from 'react';
import { useScene } from '@/hooks/useScene';
import { InvitationUI } from './invitation/InvitationUI';

export const SceneManager: React.FC = () => {
  const { currentScene } = useScene();

  return (
    <div className="relative h-full w-full pointer-events-none" data-scene={currentScene}>
      {currentScene === 'invitation' && <InvitationUI />}
    </div>
  );
};
