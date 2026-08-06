import { cva } from 'class-variance-authority';

export const surfaceVariants = cva('transition-all duration-300', {
  variants: {
    variant: {
      solid: 'bg-[#12121a] text-[#fdfbf7] border border-white/10 shadow-lg',
      glass:
        'bg-[#12121a]/60 backdrop-blur-xl border border-white/12 text-[#fdfbf7] shadow-2xl',
      elevated:
        'bg-[#1a1b2e] text-[#fdfbf7] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]',
      transparent: 'bg-transparent text-[#fdfbf7]',
      magic:
        'bg-[#12121a]/70 backdrop-blur-2xl border border-[#d4af37]/30 shadow-[0_0_30px_rgba(212,175,55,0.15)]',
      luxury:
        'bg-gradient-to-br from-[#12121a] via-[#1a1b2e] to-[#12121a] border border-[#d4af37]/40 shadow-[0_0_40px_rgba(212,175,55,0.2)]',
    },
    elevation: {
      flat: 'shadow-none',
      low: 'shadow-md',
      medium: 'shadow-xl',
      high: 'shadow-2xl',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-lg',
      md: 'rounded-xl',
      lg: 'rounded-[28px]',
      xl: 'rounded-[32px]',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'glass',
    elevation: 'medium',
    radius: 'lg',
  },
});
