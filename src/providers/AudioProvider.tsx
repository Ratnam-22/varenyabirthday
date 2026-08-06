'use client';

import React, { createContext, useState } from 'react';
import { AudioContextType } from '@/types/audio';

export const AudioContext = createContext<AudioContextType | null>(null);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(0.8);

  const toggleMute = () => setIsMuted((prev) => !prev);
  const setVolume = (v: number) => setVolumeState(Math.max(0, Math.min(1, v)));
  const playTrack = () => {};
  const playSound = () => {};
  const stopAudio = () => {};

  return (
    <AudioContext.Provider
      value={{
        isMuted,
        volume,
        toggleMute,
        setVolume,
        playTrack,
        playSound,
        stopAudio,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
