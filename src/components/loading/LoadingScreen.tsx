'use client';

import React from 'react';
import { LoadingProgress } from './LoadingProgress';

interface LoadingScreenProps {
  progress?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress = 0 }) => {
  return (
    <div className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-[#0a0a0f] text-[#fdfbf7]">
      <LoadingProgress progress={progress} />
    </div>
  );
};
