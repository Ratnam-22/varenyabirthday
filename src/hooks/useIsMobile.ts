'use client';

import { useMediaQuery } from './useMediaQuery';
import { BREAKPOINTS } from '@/constants/breakpoints';

export function useIsMobile(): boolean {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.TABLET - 1}px)`);
}
