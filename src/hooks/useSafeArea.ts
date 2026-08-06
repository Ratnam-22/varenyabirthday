'use client';

import { useState } from 'react';

export interface SafeAreaInsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

function getSafeAreaInsets(): SafeAreaInsets {
  if (typeof window === 'undefined') return { top: 0, right: 0, bottom: 0, left: 0 };
  const computedStyle = getComputedStyle(document.documentElement);
  const top = parseInt(computedStyle.getPropertyValue('--sat') || '0', 10);
  const right = parseInt(computedStyle.getPropertyValue('--sar') || '0', 10);
  const bottom = parseInt(computedStyle.getPropertyValue('--sab') || '0', 10);
  const left = parseInt(computedStyle.getPropertyValue('--sal') || '0', 10);
  return { top, right, bottom, left };
}

export function useSafeArea(): SafeAreaInsets {
  const [insets] = useState<SafeAreaInsets>(getSafeAreaInsets);
  return insets;
}
