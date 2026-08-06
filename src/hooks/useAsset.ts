'use client';

import { useState, useEffect } from 'react';
import { LoadingManager } from '@/three/loaders/LoadingManager';
import { LoadingProgress } from '@/three/loaders/types';

const INITIAL_PROGRESS: LoadingProgress = {
  total: 0,
  loaded: 0,
  percentage: 100,
  isLoading: false,
};

export function useAsset() {
  const [progress, setProgress] = useState<LoadingProgress>(() => {
    if (typeof window === 'undefined') return INITIAL_PROGRESS;
    return LoadingManager.getInstance().getProgress();
  });

  useEffect(() => {
    const manager = LoadingManager.getInstance();
    return manager.subscribe((newProgress) => {
      setProgress(newProgress);
    });
  }, []);

  return { progress: progress || INITIAL_PROGRESS };
}
