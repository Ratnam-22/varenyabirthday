'use client';

import { useSyncExternalStore, useCallback } from 'react';
import { LoadingManager } from '@/three/loaders/LoadingManager';
import { LoadingProgress } from '@/three/loaders/types';

const SERVER_SNAPSHOT: LoadingProgress = {
  total: 0,
  loaded: 0,
  percentage: 100,
  isLoading: false,
};

const getSnapshot = () => {
  return LoadingManager.getInstance().getProgress();
};

const getServerSnapshot = () => SERVER_SNAPSHOT;

export function useAsset() {
  const subscribe = useCallback((onStoreChange: () => void) => {
    return LoadingManager.getInstance().subscribe(onStoreChange);
  }, []);

  const progress = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return { progress };
}
