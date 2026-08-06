'use client';

import { useContext } from 'react';
import { AudioContext } from '@/providers/AudioProvider';
import { AudioContextType } from '@/types/audio';

export function useAudio(): AudioContextType {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
