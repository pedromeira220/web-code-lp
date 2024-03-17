import { tv } from 'tailwind-variants'

export const heading = tv(
  {
    base: 'text-gray-950 font-semibold',
    variants: {
      size: {
        xs: 'text-2xl',
        sm: 'text-3xl',
        md: 'text-4xl',
        lg: 'text-5xl',
        xl: 'text-6xl',
      },
      weight: {
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
  {
    responsiveVariants: ['sm', 'md', 'lg'],
  },
)
