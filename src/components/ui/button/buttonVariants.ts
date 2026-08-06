import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-300 focus-ring disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary:
          'bg-[#d4af37] text-[#0a0a0f] hover:bg-[#e6be44] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] font-semibold',
        secondary:
          'bg-[#1a1b2e] text-[#fdfbf7] border border-white/10 hover:bg-[#252744] hover:border-white/20',
        ghost:
          'bg-transparent text-[#fdfbf7] hover:bg-white/5 hover:text-[#d4af37]',
        glass:
          'bg-white/10 text-[#fdfbf7] backdrop-blur-md border border-white/15 hover:bg-white/15 hover:border-white/25 shadow-lg',
      },
      size: {
        sm: 'h-9 px-4 text-xs rounded-[14px]',
        md: 'h-11 px-6 text-sm rounded-[18px]',
        lg: 'h-14 px-8 text-base rounded-[22px]',
        icon: 'h-11 w-11 p-0 rounded-full',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);
