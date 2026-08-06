import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'w-full bg-[#12121a]/80 backdrop-blur-md border border-white/15 rounded-[18px] px-4 py-3 text-sm text-[#fdfbf7] placeholder-[#a0a0b0]/50 focus-ring transition-all duration-300',
  {
    variants: {
      errorState: {
        true: 'border-red-500/80 focus:border-red-500',
        false: 'focus:border-[#d4af37]/80',
      },
    },
    defaultVariants: {
      errorState: false,
    },
  }
);
