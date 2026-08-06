'use client';

import { useContext } from 'react';
import { SceneContext } from '@/providers/SceneProvider';
import { SceneContextType } from '@/types/scene';

export function useScene(): SceneContextType {
  const context = useContext(SceneContext);
  if (!context) {
    throw new Error('useScene must be used within a SceneProvider');
  }
  return context;
}
