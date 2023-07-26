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
        'flex gap-4 text-grey-700 text-lg font-extrabold md:text-2xl font-workSans',
        className
      )}
    >
      {children}
    </h3>
  );
}

export default TypographyH3;
