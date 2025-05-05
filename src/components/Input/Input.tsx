import * as React from 'react';

import { VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { inputVariants } from './inputVariants';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, rounded, variant, startContent, endContent, ...props },
    ref
  ) => {
    return (
      <div
        className={cn(
          inputVariants({ variant, rounded, className }),
          className,
          { 'border-zinc-400': !!props.disabled }
        )}
      >
        {startContent && (
          <span className="pointer-events-none flex items-center text-muted-foreground">
            {startContent}
          </span>
        )}
        <input
          ref={ref}
          {...props}
          className={cn(
            'w-full bg-transparent outline-none focus-visible:outline-none',
            {
              'pl-1.5': !!startContent,
              'pr-1.5': !!endContent,
            }
          )}
        />
        {endContent && (
          <span className="flex items-center text-muted-foreground">
            {endContent}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
