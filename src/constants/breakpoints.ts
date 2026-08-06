export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1280,
  ULTRA_WIDE: 1536,
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;
