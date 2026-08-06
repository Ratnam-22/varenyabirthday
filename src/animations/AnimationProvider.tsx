'use client';

import React from 'react';
import { AnimationContext } from './AnimationContext';
import { animationController } from './controller';

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AnimationContext.Provider value={animationController}>
      {children}
    </AnimationContext.Provider>
  );
};
