'use client';

import React from 'react';
import { LoadingProgress } from './LoadingProgress';

export interface LoadingOverlayProps {
  progress: number;
  isVisible: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ progress, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0f] backdrop-blur-md transition-opacity duration-700">
      <LoadingProgress progress={progress} />
    </div>
  );
};
