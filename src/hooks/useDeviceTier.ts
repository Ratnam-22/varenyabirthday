'use client';

import { useState } from 'react';
import { DeviceTier } from '@/types/performance';

function getDeviceTier(): DeviceTier {
  if (typeof window === 'undefined') return 'high';
  const memory = (navigator as unknown as { deviceMemory?: number }).deviceMemory;
  const cores = navigator.hardwareConcurrency || 4;

  if ((memory && memory <= 4) || cores <= 2) {
    return 'low';
  }
  if ((memory && memory <= 8) || cores <= 4) {
    return 'medium';
  }
  return 'high';
}

export function useDeviceTier(): DeviceTier {
  const [tier] = useState<DeviceTier>(getDeviceTier);
  return tier;
}
