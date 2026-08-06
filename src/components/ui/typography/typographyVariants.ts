import { cva } from 'class-variance-authority';

export const headingVariants = cva('tracking-tight font-semibold text-[#fdfbf7]', {
  variants: {
    font: {
      garamond: 'font-heading-primary',
      playfair: 'font-heading-secondary',
      inter: 'font-sans',
      caveat: 'font-handwriting',
    },
    size: {
      h1: 'text-4xl sm:text-5xl md:text-6xl font-bold leading-tight',
      h2: 'text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight',
      h3: 'text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug',
      h4: 'text-xl sm:text-2xl md:text-3xl font-medium leading-snug',
      h5: 'text-lg sm:text-xl font-medium',
      h6: 'text-base sm:text-lg font-medium',
    },
    gradient: {
      none: '',
      gold: 'text-gradient-gold',
      rose: 'text-gradient-rose',
      lavender: 'text-gradient-lavender',
    },
  },
  defaultVariants: {
    font: 'garamond',
    size: 'h2',
    gradient: 'none',
  },
});

export const typographyVariants = cva('text-[#fdfbf7]', {
  variants: {
    variant: {
      body: 'text-base sm:text-lg text-[#fdfbf7]/90 leading-relaxed font-normal',
      lead: 'text-lg sm:text-xl text-[#fdfbf7] leading-relaxed font-normal',
      muted: 'text-sm sm:text-base text-[#a0a0b0] leading-normal',
      caption: 'text-xs sm:text-sm text-[#a0a0b0] tracking-wide uppercase font-medium',
      quote: 'italic text-lg sm:text-xl text-[#e6e6fa] font-serif border-l-2 border-[#d4af37] pl-4',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});
