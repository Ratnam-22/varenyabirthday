'use client';

import React from 'react';

export interface LoadingProgressProps {
  progress: number;
  message?: string;
}

export const LoadingProgress: React.FC<LoadingProgressProps> = ({
  progress,
  message = 'Loading Experience...',
}) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="text-sm font-medium tracking-widest text-[#d4af37] uppercase">{message}</div>
      <div className="h-1 w-64 overflow-hidden rounded-full bg-[#1a1a24]">
        <div
          className="h-full bg-gradient-to-r from-[#d4af37] to-[#fcf6ba] transition-all duration-300 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
      <div className="text-xs text-[#a0a0b0] font-mono">{Math.round(progress)}%</div>
    </div>
  );
};
