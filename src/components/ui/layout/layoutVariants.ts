import { cva } from 'class-variance-authority';

export const containerVariants = cva('w-full mx-auto px-4 sm:px-6 lg:px-8', {
  variants: {
    maxWidth: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full',
    },
    centered: {
      true: 'flex flex-col items-center justify-center',
      false: '',
    },
  },
  defaultVariants: {
    maxWidth: 'xl',
    centered: false,
  },
});

export const sectionVariants = cva('w-full relative', {
  variants: {
    padding: {
      none: 'py-0',
      sm: 'py-8 sm:py-12',
      md: 'py-12 sm:py-16 lg:py-24',
      lg: 'py-16 sm:py-24 lg:py-32',
      xl: 'py-24 sm:py-32 lg:py-48',
    },
  },
  defaultVariants: {
    padding: 'md',
  },
});
