'use client';

import { useSyncExternalStore } from 'react';
import { loadingManager } from '@/three/loaders/LoadingManager';

export function useAsset() {
  const subscribe = (cb: () => void) => loadingManager.subscribe(cb);
  const getSnapshot = () => loadingManager.getProgress();
  const getServerSnapshot = () => ({ total: 0, loaded: 0, percentage: 100, isLoading: false });

  const progress = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return { progress };
}
