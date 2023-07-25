import { cn } from '@/util';
import React from 'react';

interface TypographyH3Props extends React.ComponentProps<'h3'> {
  className?: string;
  children: React.ReactNode;
}

function TypographyH3({ children, className }: TypographyH3Props) {
  return (
    <h3
      className={cn(
        'text-grey-700 text-3xl font-extrabold md:text-5xl font-workSans',
        className
      )}
    >
      {children}
    </h3>
  );
}

export default TypographyH3;
