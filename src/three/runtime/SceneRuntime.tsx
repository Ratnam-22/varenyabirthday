'use client';

import React from 'react';
import { useScene } from '@/hooks/useScene';
import { InvitationScene3D } from '@/scenes/invitation/InvitationScene3D';
import { GiftScene3D } from '@/scenes/gift/GiftScene3D';

export const SceneRuntime: React.FC = () => {
  const { currentScene } = useScene();

  return (
    <group name={`scene-runtime-${currentScene}`}>
      {currentScene === 'invitation' && <InvitationScene3D />}
      {currentScene === 'gift' && <GiftScene3D />}
    </group>
  );
};
