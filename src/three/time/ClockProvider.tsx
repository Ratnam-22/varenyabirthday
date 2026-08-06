'use client';

import React, { createContext } from 'react';
import { useFrame } from '@react-three/fiber';
import { Time, time } from './Time';

export const ClockContext = createContext<Time>(time);

export const ClockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useFrame((_, delta) => {
    time.update(delta);
  });

  return <ClockContext.Provider value={time}>{children}</ClockContext.Provider>;
};
