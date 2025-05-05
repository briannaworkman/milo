import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'flex items-center h-9 w-full px-3 py-2 text-sm bg-transparent file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus-within:outline-none aria-invalid:ring-1 aria-invalid:ring-destructive aria-invalid:focus-within:ring-2 aria-invalid:focus-within:ring-destructive',
  {
    variants: {
      rounded: {
        none: 'rounded-none',
        md: 'rounded-md',
      },
      variant: {
        outline:
          'border border-base-content text-base-content aria-invalid:border-transparent',
        filled:
          'border-2 bg-background focus-within:border-primary focus-within:bg-transparent',
        underlined:
          'rounded-none border-b-border focus-within:border-b-primary focus-within:shadow-[0_1px_0px_0px_hsl(var(--primary))]',
        unstyled: '',
      },
    },
    defaultVariants: {
      rounded: 'md',
      variant: 'outline',
    },
  }
);
