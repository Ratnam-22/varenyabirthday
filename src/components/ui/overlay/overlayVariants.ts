import { cva } from 'class-variance-authority';

export const backdropVariants = cva(
  'fixed inset-0 z-40 transition-opacity duration-300 flex items-center justify-center',
  {
    variants: {
      intensity: {
        light: 'bg-[#0a0a0f]/40 backdrop-blur-sm',
        medium: 'bg-[#0a0a0f]/70 backdrop-blur-md',
        heavy: 'bg-[#0a0a0f]/90 backdrop-blur-xl',
      },
    },
    defaultVariants: {
      intensity: 'medium',
    },
  }
);
