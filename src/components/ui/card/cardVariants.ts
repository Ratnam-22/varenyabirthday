import { cva } from 'class-variance-authority';

export const cardVariants = cva('p-6 sm:p-8 transition-all duration-300 relative overflow-hidden', {
  variants: {
    variant: {
      glass:
        'bg-[#12121a]/60 backdrop-blur-xl border border-white/12 rounded-[28px] shadow-2xl hover:border-white/20',
      feature:
        'bg-[#1a1b2e]/70 backdrop-blur-xl border border-[#d4af37]/30 rounded-[28px] hover:border-[#d4af37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]',
      content:
        'bg-[#12121a] border border-white/10 rounded-[28px] shadow-lg hover:shadow-xl',
      overlay:
        'bg-[#0a0a0f]/80 backdrop-blur-2xl border border-white/15 rounded-[32px] shadow-2xl',
      magic:
        'bg-gradient-to-br from-[#1a1b2e]/80 via-[#12121a]/90 to-[#1a1b2e]/80 backdrop-blur-2xl border border-[#d4af37]/40 rounded-[32px] shadow-[0_0_35px_rgba(212,175,55,0.15)]',
      animatedBorder:
        'bg-[#12121a] border border-[#d4af37]/50 rounded-[28px] shadow-2xl relative',
    },
    hoverEffect: {
      none: '',
      lift: 'hover:-translate-y-1.5',
      glow: 'hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]',
      scale: 'hover:scale-[1.02]',
    },
  },
  defaultVariants: {
    variant: 'glass',
    hoverEffect: 'lift',
  },
});
