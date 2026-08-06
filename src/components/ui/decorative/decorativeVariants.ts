import { cva } from 'class-variance-authority';

export const glowDotVariants = cva('inline-block rounded-full animate-pulse', {
  variants: {
    color: {
      gold: 'bg-[#d4af37] shadow-[0_0_10px_#d4af37]',
      rose: 'bg-[#b76e79] shadow-[0_0_10px_#b76e79]',
      emerald: 'bg-[#50c878] shadow-[0_0_10px_#50c878]',
      lavender: 'bg-[#e6e6fa] shadow-[0_0_10px_#e6e6fa]',
    },
    size: {
      sm: 'h-1.5 w-1.5',
      md: 'h-2.5 w-2.5',
      lg: 'h-3.5 w-3.5',
    },
  },
  defaultVariants: {
    color: 'gold',
    size: 'md',
  },
});

export const badgeVariants = cva(
  'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300',
  {
    variants: {
      variant: {
        gold: 'bg-[#d4af37]/10 text-[#d4af37] border-[#d4af37]/30',
        rose: 'bg-[#b76e79]/10 text-[#b76e79] border-[#b76e79]/30',
        glass: 'bg-white/5 text-[#fdfbf7] border-white/10 backdrop-blur-md',
        emerald: 'bg-[#50c878]/10 text-[#50c878] border-[#50c878]/30',
      },
    },
    defaultVariants: {
      variant: 'gold',
    },
  }
);
