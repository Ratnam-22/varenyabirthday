'use client';

import React from 'react';
import { useAsset } from '@/hooks/useAsset';
import { LoadingOverlay } from './LoadingOverlay';

export const PreloaderExperience: React.FC = () => {
  const { progress } = useAsset();

  return <LoadingOverlay progress={progress.percentage} isVisible={progress.isLoading} />;
};
