'use client';

import { useSyncExternalStore, useCallback } from 'react';
import { loadingManager } from '@/three/loaders/LoadingManager';
import { LoadingProgress } from '@/three/loaders/types';

const SERVER_SNAPSHOT: LoadingProgress = {
  total: 0,
  loaded: 0,
  percentage: 100,
  isLoading: false,
};

const getSnapshot = () => {
  if (!loadingManager) return SERVER_SNAPSHOT;
  return loadingManager.getProgress();
};

const getServerSnapshot = () => SERVER_SNAPSHOT;

export function useAsset() {
  const subscribe = useCallback((onStoreChange: () => void) => {
    if (!loadingManager) return () => {};
    return loadingManager.subscribe(onStoreChange);
  }, []);

  const progress = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return { progress };
}
