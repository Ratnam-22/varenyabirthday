import { ANIMATION_DURATIONS, ANIMATION_EASINGS } from '@/constants/animation';

export const designTokens = {
  colors: {
    background: '#0a0a0f', // Deep Space Black
    surfacePrimary: '#12121a', // Charcoal
    surfaceSecondary: '#1a1b2e', // Midnight Blue
    accentPrimary: '#d4af37', // Warm Gold
    accentSecondary: '#b76e79', // Rose Gold
    highlight: '#e6e6fa', // Soft Lavender
    success: '#50c878', // Emerald
    textPrimary: '#fdfbf7', // Warm White
    textSecondary: '#a0a0b0', // Soft Gray
    glassBorder: 'rgba(255, 255, 255, 0.12)',
    particleGlow: '#fff8e7', // Golden White
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
    '2xl': '64px',
    '3xl': '96px',
    '4xl': '128px',
  },
  containerWidths: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    full: '100%',
  },
  typography: {
    fontFamilies: {
      primaryHeading: 'var(--font-cormorant)',
      secondaryHeading: 'var(--font-playfair)',
      body: 'var(--font-inter)',
      handwriting: 'var(--font-caveat)',
    },
    sizes: {
      heroTitle: 'clamp(2.5rem, 8vw, 6rem)',
      sectionHeading: 'clamp(2rem, 5vw, 2.5rem)',
      subHeading: 'clamp(1.5rem, 3vw, 1.75rem)',
      body: '1.125rem',
      small: '1rem',
      caption: '0.875rem',
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0em',
      wide: '0.05em',
      widest: '0.15em',
    },
    lineHeights: {
      none: 1,
      tight: 1.2,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
    },
  },
  blur: {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '25px',
    '2xl': '40px',
  },
  opacity: {
    0: 0,
    5: 0.05,
    10: 0.1,
    15: 0.15,
    20: 0.2,
    30: 0.3,
    50: 0.5,
    75: 0.75,
    90: 0.9,
    100: 1,
  },
  gradients: {
    goldShimmer: 'linear-gradient(135deg, #d4af37 0%, #fff8e7 50%, #b76e79 100%)',
    roseGoldAura: 'linear-gradient(135deg, #b76e79 0%, #e6e6fa 100%)',
    deepSpace: 'radial-gradient(circle at center, #1a1b2e 0%, #0a0a0f 100%)',
    glassHighlight: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 100%)',
  },
  borderRadius: {
    button: '18px',
    card: '28px',
    glassPanel: '32px',
    full: '9999px',
  },
  shadows: {
    ambient: '0 10px 30px rgba(0, 0, 0, 0.5)',
    coloredGlow: '0 0 25px rgba(212, 175, 55, 0.25)',
    softDepth: '0 20px 40px rgba(0, 0, 0, 0.6)',
    lightBloom: '0 0 50px rgba(255, 248, 231, 0.3)',
  },
  animationDurations: ANIMATION_DURATIONS,
  animationEasings: ANIMATION_EASINGS,
  zIndexLayers: {
    background: -10,
    canvas: 0,
    content: 10,
    overlay: 20,
    modal: 30,
    cursor: 50,
  },
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1280px',
    ultraWide: '1536px',
  },
} as const;

export type DesignTokens = typeof designTokens;
