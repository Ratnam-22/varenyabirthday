'use client';

import { useViewport } from './useViewport';
import { BREAKPOINTS, BreakpointKey } from '@/constants/breakpoints';

export function useBreakpoint(): BreakpointKey {
  const { width } = useViewport();

  if (width < BREAKPOINTS.TABLET) return 'MOBILE';
  if (width < BREAKPOINTS.DESKTOP) return 'TABLET';
  if (width < BREAKPOINTS.ULTRA_WIDE) return 'DESKTOP';
  return 'ULTRA_WIDE';
}
