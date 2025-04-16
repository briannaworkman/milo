import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-main text-primary-content shadow border border-primary-main hover:bg-primary-300',
        secondary:
          'bg-secondary-main text-secondary-content shadow border border-secondary-main hover:bg-secondary-200',
        outline:
          'border border-base-content text-base-content shadow hover:bg-base-100',
        link: 'text-primary-main underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
        link: 'h-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);
